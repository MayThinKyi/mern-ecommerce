import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
const schema = yup.object().shape({
    email: yup.string().email().required(),
    password:yup.string().min(8).max(32).required(),

  });
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmitHandler = (data,e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/auth/login",data)
        .then(res=>{
          console.log(res.data)
          dispatch(setUser(res.data))
          navigate('/')
        })
        .catch(err=>{console.log(err)
        alert(err.response.data.error)})
      };
  return (
    <div className='px-5 py-10 cursor-pointer md:px-10'>
        <div className="w-[100%] sm:w-[40%] mx-auto">
        <h1 className="pb-5 text-2xl font-semibold text-center uppercase border-b">Login</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-8 ">
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
            <button type='submit' className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
             Login
            </button>
        </form>
        <div className="text-[15px] my-4 flex  items-center gap-x-4">
            <h1 className='text-zinc-600'>New Customer?</h1>
            <Link to={'/register'} className='text-[#183440] underline'>Create your account</Link>
        </div>
        </div>
    </div>
  )
}

export default Login
