const express=require('express');
const { getAllProducts, createProduct, getProductById, deleteProductById, updateProductById, addReview,  } = require('../controllers/productController');
const router=express.Router();
router.get('/getAllProducts',getAllProducts)
router.post('/createProduct',createProduct);
router.get('/:productId',getProductById)
router.delete('/:productId',deleteProductById)
router.put('/:productId',updateProductById);
router.post('/addReview',addReview)
module.exports=router;