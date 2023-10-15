const { response } = require("express");
const UserModel = require("../models/UserModel");
const bcrypt=require('bcrypt');
const getUserProfile=(req,res)=>{
    const userId=req.params.userId;
    UserModel.findById(userId)
    .then((user)=>res.send(user))
    .catch(err=>res.status(400).json({error:err}))
}
const updateUserProfile=(req,res)=>{
    const {id,name,email}=req.body;
    UserModel.findByIdAndUpdate(id,{name,email})
    .then((data)=>res.send({message:"User Profile updated successfully!",user:data}))
    .catch(err=>res.status(400).json({error:err}))
}
const userPasswordChange=(req,res)=>{
    const {id,oldPassword,newPassword}=req.body;
    UserModel.findById(id)
    .then((user)=>{
        bcrypt.compare(oldPassword,user.password)
        .then(match=>{
            if(match) {
                bcrypt.hash(newPassword,10)
                .then((hash)=>{
                    UserModel.findByIdAndUpdate(id,{password:hash})
                    .then(()=>res.send('Password updated successfully!'))
                    .catch(err=>res.status(400).json({error:err}))
                })
            }else res.status(400).json({error:"Old Password is not credential!"})
        })
    })
    .catch(err=>res.status(400).json({error:err}))
}
const getAllUsers=(req,res)=>{
    UserModel.find({})
    .then((users)=>res.send(users))
    .catch(err=>res.status(400).json({error:err}))
}
const userChangeRole=(req,res)=>{
    const userId=req.params.userId;
    UserModel.findById(userId)
    .then((user)=>{
        user.role=user.role==='admin' ? 'user' : 'admin';
        user.save()
        .then((data)=>res.send('User role changed successfully!')) 
        .catch((err=>res.status(400).json({error:err})))
    }) .catch((err=>res.status(400).json({error:err})))

}
const deleteUser=(req,res)=>{
    const userId=req.params.userId;
    UserModel.findByIdAndRemove(userId)
    .then(()=>res.send('User deleted successfully!'))
    .catch(err=>res.status(400).json({error:err}))
}
module.exports={getUserProfile,updateUserProfile,userPasswordChange,
    getAllUsers,userChangeRole,deleteUser}