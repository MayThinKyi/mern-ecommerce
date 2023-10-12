const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    userId:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    total:{type:Number,require:true},
    orderItems:[{
        productId:{type:String,require:true},
        name:{type:String,require:true},
        price:{type:Number,require:true},
        quantity:{type:Number,require:true},
        image:{type:String,require:true}
    }],
    transactionId:{type:String,require:true},
    status:{type:String,require:true},
    shippingAddress:{
        city:{type:String,require:true},
        country:{type:String,require:true},
        address:{type:String,require:true},
        postalCode:{type:String,require:true},

    }
})
const OrderModel=mongoose.model('orders',orderSchema);
module.exports=OrderModel