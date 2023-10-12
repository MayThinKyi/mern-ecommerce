const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json())
const db=require('./db/db')
//Product Routes
const productRouter=require('./routes/productRoutes');
app.use('/api/products/',productRouter);
//Auth Routes
const authRouter=require('./routes/authRoutes');
app.use('/api/auth/',authRouter);
//User Routes
const userRouter=require('./routes/userRoutes');
app.use('/api/users/',userRouter)
//Order Routes
const orderRouter=require('./routes/orderRoutes');
app.use('/api/orders/',orderRouter);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server is running on PORT '+port)
})