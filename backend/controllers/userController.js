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
    .then((data)=>res.send("User Profile updated successfully!"))
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
module.exports={getUserProfile,updateUserProfile,userPasswordChange}