import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateUserProfile } from '../store/userSlice';
import toast from 'react-hot-toast';
const Profile = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isEdit,setIsEdit]=useState(false);
  const user=useSelector((state)=>state.user.user);
  const [userInfo,setUserInfo]=useState({
  name:'',email:'',id:''
  });
  const userInfoInputHandler=(e)=>{
    setUserInfo({...userInfo,[e.target.id]:e.target.value})
  }
  const updateProfileHandler=()=>{
    if(userInfo.name && userInfo.email){
      dispatch(updateUserProfile(userInfo))
    setIsEdit(false)
    toast.success('Profile updated successfully!')
    }else toast.error('Please provide all fields')
  }
  useEffect(()=>{
    if(!user.name) navigate('/login')
    else {
      axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/users/${user.id}`)
      .then((res)=>{
        console.log(res.data)
        setUserInfo({
          name:res.data?.name,email:res.data?.email,id:res.data?._id
        })
      })
      .catch(err=>console.log(err))
    }
  },[])
  return (
    <div className='px-5 py-10 md:px-10'>
        <h1 className="pb-5 text-2xl font-semibold text-center uppercase border-b">Account Info</h1>
        <div className="w-[100%] sm:w-[40%] mx-auto mt-8">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Name</h1>
            <input placeholder='Name' id='name'  disabled={!isEdit} value={userInfo.name} onChange={userInfoInputHandler} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Email Address</h1>
            <input placeholder='Email' id='email' disabled={!isEdit} value={userInfo.email} onChange={userInfoInputHandler} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            {isEdit ?  <div onClick={updateProfileHandler} className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
            <h1 >Update Profile</h1>
            </div> :
            <div onClick={()=>setIsEdit(true)} className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
            <h1 >Edit Profile</h1>
            </div> }
            <div className="my-5">
            <Link to={'/update-password'} className=' underline text-[#0F2027] '>Update Password</Link>

            </div>
            
        </div>
    </div>
  )
}

export default Profile
