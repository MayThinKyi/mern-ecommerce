import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const navigate=useNavigate();
    const user=useSelector((state)=>state.user.user)
    const [passwords,setPasswords]=useState({
        oldPassword:'',
        newPassword:''
    });
    const passwordHandler=(e)=>{
        setPasswords({...passwords,[e.target.id]:e.target.value})
    }
    const updatePasswordHandler=()=>{
            if(passwords.oldPassword && passwords.newPassword ){
               if(passwords.newPassword.trim().length>=8){
                axios.put('https://mern-ecommerce-rf2p.onrender.com/api/users/changePassword',{
                    id:user.id,
                    ...passwords
                }).then((res)=>{
                    console.log(res.data)
                    navigate('/shop')
                    toast.success('Passwords updated successfully!')
                })
                .catch(err=>console.log(err))
               }else toast.error('Password must be at least 8 characters.')
            }else toast.error('Please provide all fields!')
    }
  return (
    <div className='py-10 px-5 md:px-10'>
        <h1 className="uppercase pb-5 border-b font-semibold text-center text-2xl">Update Password</h1>
        <div className="w-[100%] sm:w-[40%] mx-auto mt-8">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Old Password</h1>
            <input  placeholder='Old Password' type='password' id='oldPassword'   value={passwords?.oldPassword} onChange={passwordHandler} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>New Password</h1>
            <input placeholder='New Password' type='password' id='newPassword'  value={passwords.newPassword} onChange={passwordHandler} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
             <div onClick={updatePasswordHandler} className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
            <h1 >Update Password</h1>
            </div> 
            
            
        </div>
      
    </div>
  )
}

export default UpdatePassword
