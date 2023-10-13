const ProductsModel = require("../models/ProductModel")

const getAllProducts=(req,res)=>{
    ProductsModel.find()
    .then((data)=>res.send(data))
    .catch(err=>res.status(400).json({error:err}))
}
const createProduct=(req,res)=>{
   const {name,image,price,category,brand,description,overallRating,reviews}=req.body;
   const newProducts=new ProductsModel({
    name,image,price,category,brand,description,overallRating,reviews
   });
   newProducts.save()
   .then((data)=>res.send('Product created successfully!'))
   .catch(err=>res.status(400).json({error:err}))
}
const getProductById=(req,res)=>{
    const productId=req.params.productId;
    ProductsModel.findById(productId)
    .then((data)=>res.send(data))
    .catch(err=>res.status(400).json({error:err}))
}
const deleteProductById=(req,res)=>{
    const productId=req.params.productId;
    ProductsModel.findByIdAndRemove(productId)
    .then(()=>res.send('Product deleted succssfully!'))
    .catch(err=>res.status(400).json({error:err}))
}
const updateProductById=(req,res)=>{
    const productId=req.params.productId;
    ProductsModel.findByIdAndUpdate(productId,req.body)
    .then((data)=>res.send('Product updated successfully!'))
    .catch(err=>res.status(400).json({error:err}))
}
const addReview=(req,res)=>{
    const {comment,name,productId,rating,userId}=req.body;
   ProductsModel.findById(productId)
    .then((product)=>{
        product.reviews=[...product.reviews,{
            rating,comment,userId,name
        }]
        let totalRating=0;
        product.reviews.map((r)=>totalRating+=r.rating);
        product.overallRating=totalRating/product.reviews.length;
        product.save()
        .then(()=>res.send('Review submitted successfully!'))
        .catch(err=>res.status(400).json({error:err}))

    })
}

module.exports={getAllProducts,createProduct,getProductById,
    deleteProductById,updateProductById,addReview}