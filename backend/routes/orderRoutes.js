const express=require('express');
const { createOrder, getUserOrderHistory, getAllOrders, changeOrderStatus } = require('../controllers/orderControllers');
const router=express.Router();
router.post('/createOrder',createOrder)
router.get('/:userId',getUserOrderHistory);
router.get('/',getAllOrders);
router.put('/changeOrderStatus',changeOrderStatus)
module.exports=router;

