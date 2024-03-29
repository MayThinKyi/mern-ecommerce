const mongoose=require('mongoose');
const reviewSchema={
    rating:{type:Number,require:true},
    comment:{type:String,require:true},
    userId:{type:String,require:true},
    name:{type:String,require:true}
}
const productSchema=mongoose.Schema({
    name:{type:String,require:true},
    brand:{type:String,require:true},
    category:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    description:{type:String,require:true},
    reviews:[reviewSchema],
    overallRating:{type:Number}
})
const ProductsModel=mongoose.model('products',productSchema);
module.exports=ProductsModel;