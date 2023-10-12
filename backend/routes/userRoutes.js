const express=require('express');
const { getUserProfile, updateUserProfile, userPasswordChange } = require('../controllers/userController');
const router=express.Router();
router.get('/:userId',getUserProfile);
router.put('/updateProfile',updateUserProfile)
router.put('/changePassword',userPasswordChange)
module.exports=router;