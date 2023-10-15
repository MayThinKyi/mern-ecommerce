const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})
const UserModel=mongoose.model('users',userSchema);
module.exports=UserModel