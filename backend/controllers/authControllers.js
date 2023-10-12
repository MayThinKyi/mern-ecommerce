const UserModel = require("../models/UserModel");
const bcrypt=require('bcrypt');
const {sign}=require('jsonwebtoken');
const registerUser=(req,res)=>{
    const {name,email,password}=req.body;
    UserModel.findOne({email})
    .then((user)=>{
        if(user) res.status(400).json({error:'Email already exists!'})
        else {
            bcrypt.hash(password,10)
            .then((hash)=>{
                const newUser=new UserModel({
                    name,
                    email,password:hash
                })
                newUser.save()
                .then((data)=>res.send('User registered successfully!'))
                .catch(err=>res.status(400).json({error:err}))
            })
        }
    })
    .catch(err=>res.status(400).json({error:err}))
}
const loginUser=(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email})
    .then((user)=>{
        if(!user) res.status(400).json({error:"Email doesn't exist"})
        else {
            bcrypt.compare(password,user.password)
            .then((match)=>{
                if(match) {
                    const token=sign({name:user.name,password,email},'importantSecret')
                    res.send({
                        token,
                        user
                    })
                }
                else res.status(400).json({error:"Password is not credential!"})
            })
        }
    })
    .catch(err=>res.status(400).json({error:err}))
}
module.exports={registerUser,loginUser}