const express=require('express')
const cors=require('cors')
const dotenv = require('dotenv')
const connectDB=require('./config/db')
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')
const cartRoutes=require('./routes/cartRoutes')
const checkoutRoutes=require('./routes/checkoutRoutes')
const orderRoutes=require('./routes/orderRoutes')
const uploadRoutes=require('./routes/uploadRoutes')
const subscribeRoutes=require('./routes/subscribeRoutes')
const adminRoutes=require('./routes/adminRoutes')
const productAdminRoutes=require('./routes/productAdminRoutes')
const adminOrderRoutes=require('./routes/adminOrderRoutes')
 

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
// console.log(process.env.port)

const port=process.env.PORT || 3000;


//connecting to mongodb 
connectDB()

app.get('/',(req,res)=>{
    res.send("WELCOME")
})

//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api",uploadRoutes);
app.use("/api", subscribeRoutes);

// Admin Routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);


app.listen(port,()=>{
    console.log(`Server in running on http://localhost:${port}`)

})