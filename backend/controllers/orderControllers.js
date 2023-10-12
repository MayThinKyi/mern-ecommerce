const OrderModel = require('../models/OrderModel');

const stripe=require('stripe')('sk_test_51MFFV7Hyjgtosq2qh5n9lkMsmkz28skfzlYhS1IxHVw1aTMUUcAYLx6WenzrJnfu7BH6afWJNN5k65wCbINaFrYr00cYeqAXkX')
//Create Order
const createOrder=async(req,res)=>{
    const {token,total,user,cart}=req.body
    const customer=await stripe.customers.create({
       email:token.email,
        source:token.id,
    });
    const payment=await stripe.charges.create({
        customer:customer.id,
        receipt_email:token.email,
        currency:'usd',
        amount:total*100
    })
    if(payment) {
        OrderModel.create({
            userId:user.id,
            name:user.name,
            email:token.email,
            total,
            orderItems:cart,
            transactionId:payment.source.id,
            status:'Pending',
            shippingAddress:{
                city:payment.source.address_city,
                country:payment.source.address_country,
                address:payment.source.address_line1,
                postalCode:payment.source.address_zip,
            }
          }).then(()=>res.send('Order submitted succcessfully!'))
          .catch(err=>res.status(400).json({error:err}))
    }
    else res.status(400).json({error:'Payment failed!'})
}
//Get Order History By UserId
const getUserOrderHistory=(req,res)=>{
    const userId=req.params.userId;
    OrderModel.find({userId})
    .then((orders)=>res.send(orders))
    .catch(err=>res.status(400).json({error:err}))
}
module.exports={createOrder,getUserOrderHistory}