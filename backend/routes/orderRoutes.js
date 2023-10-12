const express=require('express');
const { createOrder, getUserOrderHistory } = require('../controllers/orderControllers');
const router=express.Router();
router.post('/createOrder',createOrder)
router.get('/:userId',getUserOrderHistory)
module.exports=router;

