const mongoose = require("mongoose");
const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: String,
    image: String,
    price: Number,  // ✅ changed from String to Number
    size: String,
    color: String,
    quantity: {
        type: Number,
        default: 1,
    }
}, {
    _id: false
});

const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    guestId:{
        type:String,
    },
    products:[cartItemSchema],
    totalPrice:{
        type:Number,
        default:0,
    }
},
{
    timestamps:true,
});

module.exports = mongoose.model("Cart", cartSchema);
