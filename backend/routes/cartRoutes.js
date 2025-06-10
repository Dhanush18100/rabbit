const express=require('express');
const Cart=require("../models/Cart")
const Product =require('../models/Product')
const {protect} = require('../middleware/authMiddleware')

const router=express.Router();


//Helper function to get a cart by user Id or guest Id
const getCart=async(userId,guestId)=>{
    if(userId){
        return await Cart.findOne({user:userId});
    }else if(guestId){
        return await Cart.findOne({guestId});
    }
    return null;
}

//@route POST /api/cart
//@desc Add a product to cart for guest or logged in user
//@acess Public

router.post('/',async(req,res)=>{
    const{ productId, quantity,size,color,guestId,userId }=req.body;
    try {
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({message:"Product not found"});

        //Determine if user is logged in or guest
        let cart= await getCart(userId,guestId);

        //If the cart exist we have to update it

        if(cart){
            const ProductIndex=cart.products.findIndex((p)=>p.productId.toString()===productId && p.size===size && p.color===color);
            if (ProductIndex>-1) {
                //If the product already exists , update the quantity
                cart.products[ProductIndex].quantity+=quantity
                
            }else{
                //add new product
                cart.products.push({
                    productId,
                    name:product.name,
                    image:product.images[0].url,
                    price:product.price
                    ,
                    size,
                    color,
                    quantity,

                })
            }
            //Recalculate total Price 
            cart.totalPrice=cart.products.reduce((acc,item)=>acc+item.price * item.quantity,0)
            await cart.save();
            return res.status(200).json(cart);
        }else{
            //Create a new cart for guest or user
            const newCart=await Cart.create({
                user:userId?userId:undefined,
                guestId:guestId?guestId:"guest_"+new Date().getTime(),
                
                products:[
                    {
                        productId,
                        name:product.name,
                        image:product.images[0].url,
                        price:product.price,
                        size,
                        color,
                        quantity,
                    }
                ],
                totalPrice:product.price*quantity,
            })
            return res.status(201).json(newCart)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
        
    }
})

//@route PUT /api/cart
//@desc Update product quantity in cart
//@accesss PUBLIC
router.put("/",async(req,res)=>{
    const{ productId,quantity,size,color,guestId,userId}=req.body;

    try {
        let cart=await getCart(userId,guestId);
        if(!cart) return res.status(404).json({message:"Cart not found"});

        const productIndex=cart.products.findIndex((p)=>p.productId.toString()===productId &&p.size===size &&p.color===color);

        if(productIndex>-1){
            //update quantity
            if(quantity>0){
                cart.products[productIndex].quantity=quantity
            }else{
                cart.products.splice(productIndex,1) //remove product
            }

            cart.totalPrice=cart.products.reduce((acc,item)=>acc+item.price*item.quantity,0)
            await cart.save();
            return res.status(200).json(cart)
        }else{
            return res.status(404).json({message:"Product not found in cart"})
        }

    } catch (error) {

        console.error(error);
        return res.status(500).json({message:"Server error"})
        
    }
})

//@route DELETE /api/cart
//@desc remove product from cart
//@access public

router.delete("/",async(req,res)=>{
    const {productId,size,color,guestId,userId}=req.body;
    
    try {
        let cart=await getCart(userId,guestId);
         
        if(!cart) return res.status(404).json({message:"Cart is not found"});

        const productIndex=cart.products.findIndex((p)=>p.productId.toString()===productId && p.size===size && p.color===color)
         

        if(productIndex>-1){
            cart.products.splice(productIndex,1);
            cart.totalPrice=cart.products.reduce((acc,item)=>acc+item.price*item.quantity,0)
        
            await cart.save()
            return res.status(200).json(cart)
        }else{
            return res.status(404).json({message:"Product not found in carts"})
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Server Error"})
         }
})
//@route GET /api/cart
//@desc get cart
//@access Public

router.get("/",async(req,res)=>{
    const { userId,guestId} =req.body;
    try {
        const cart=await getCart(userId,guestId)

        if(cart){
            res.json(cart);
        }else{
            res.status(404).json({message:'Cart not found'})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Server error"})
        
        
    }
});

//@routes POST /api/cart/merge
//@decs Merge guest cart into usercart
//@access private

router.post('/merge',protect,async(req,res)=>{
    const{guestId}=req.body;
    try {
        //Find guest cart and usercart

        const guestCart=await Cart.findOne({guestId});
         const userCart=await Cart.findOne({user:req.user._id});

         if(guestCart){
            if(guestCart.products.length===0){
                return res.status(400).json({message:"Guest Cart is empty"})

            }

            if(userCart){
                //Merger guest cart into user cart

                guestCart.products.forEach((guestItem)=>{
                    const productIndex=userCart.products.findIndex((item)=>item.productId.toString()===guestItem.productId.toString() && item.size===guestItem.size && item.color===guestItem.color);

                    if(productIndex>-1){
                        //If the item exist update 
                        userCart.products[productIndex].quantity+=guestItem.quantity;
                    }else{
                        //add items to cart
                        userCart.products.push(guestItem)
                    }
                });
                userCart.totalPrice=userCart.products.reduce((acc,item)=>acc+item.price*item.quantity,0);
                await userCart.save()

                //Remove the guest cart after merging
                try {
                    await Cart.findOneAndDelete({guestId})
                } catch (error) {
                    console.error("Error deleting guest cart",error);
                    
                    
                }
                res.status(200).json(userCart);
            }else{
                // if user has no existing cart assign guest cart to user

                guestCart.user=req.user._id;
                guestCart.guestId=undefined;
                await guestCart.save();

                res.status(200).json(guestCart)


            }
         }else{
            if(userCart){
                //Guest cart has already been merged , return user cart

                return res.status(200).json(userCart);
            }
            res.status(404).json({message:"Guest cart not found"})
         }


        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"})
        
        
    }
})
module.exports=router;
