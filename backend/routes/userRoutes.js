const express=require('express');
const { getUserProfile, updateUserProfile, userPasswordChange, getAllUsers, userChangeRole, deleteUser } = require('../controllers/userController');
const router=express.Router();
router.get('/:userId',getUserProfile);
router.put('/updateProfile',updateUserProfile)
router.put('/changePassword',userPasswordChange)
router.get('/',getAllUsers);
router.get('/roleChange/:userId',userChangeRole)
router.delete('/:userId',deleteUser)
module.exports=router;