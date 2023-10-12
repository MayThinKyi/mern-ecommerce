import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password:yup.string().min(8).max(32).required(),
    confirmPassword:yup.string().min(8).max(32).required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
const Register = () => {
  const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmitHandler = (data,e) => {
        e.preventDefault()
        axios.post("https://mern-ecommerce-rf2p.onrender.com/api/auth/register",data)
        .then(res=>{
          console.log(res.data)
          navigate('/login')
        })
        .catch(err=>{console.log(err)
        alert(err.response.data.error)})
      };
  return (
    <div className='px-5 py-10 cursor-pointer md:px-10'>
        <div className="w-[100%] sm:w-[40%] mx-auto">
        <h1 className="pb-5 text-2xl font-semibold text-center uppercase border-b">Register</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-8 ">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Name</h1>
            <input placeholder='Name' {...register("name")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.name?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Email Address</h1>
            <input placeholder='Email' {...register("email")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.email?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Password</h1>
            <input placeholder='Password' type='password' {...register("password")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.password?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Confirm Password</h1>
            <input placeholder='Confirm Password' type='password' {...register("confirmPassword")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.confirmPassword?.message}</p>
            </div>
            <button type='submit' className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
             Login
            </button>
        </form>
        <div className="text-[15px] my-4 flex  items-center gap-x-4">
            <h1 className='text-zinc-600'>Already have an account?</h1>
            <Link to={'/login'} className='text-[#183440] underline'>Login Here</Link>
        </div>
        </div>
    </div>
  )
}

export default Register
