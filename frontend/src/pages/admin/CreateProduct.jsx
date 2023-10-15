import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import TextEditor from '../../components/admin/product/TextEditor';
import axios from 'axios';
import toast from 'react-hot-toast';
const schema = yup.object().shape({
    name: yup.string().required(),
    brand:yup.string().required(),
    category:yup.string().required(),
    price:yup.number().required(),
    image:yup.string().required(),
  });
const CreateProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmitHandler = (data,e) => {
        e.preventDefault();
        console.log(data,'des',editorRef.current.getContent())
        axios.post(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/createProduct`,{...data,description:editorRef.current.getContent()})
        .then(res=>{
          console.log(res.data)
          toast.success('Product created successfully!')
         // navigate('/')
        })
        .catch(err=>{console.log(err)
          toast.error(err.response.data.error)}) 
      };
      const editorRef = useRef(null);
      return (
    <div  className='px-5 py-10 sm:px-10 w-[100%] md:w-[80%] lg:w-[60%] mx-auto '>
        <h1 className='pb-8 text-2xl font-semibold text-center border-b'>Create Product</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-8 ">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Name</h1>
            <input placeholder='Name' {...register("name")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.name?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Brand</h1>
            <input placeholder='Brand' {...register("brand")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.brand?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Category</h1>
            <input placeholder='Category' {...register("category")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.category?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Price</h1>
            <input placeholder='Price' {...register("price")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.price?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Image</h1>
            <input placeholder='Image URL' {...register("image")} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            <p className='text-[14px] text-red-500'>{errors.image?.message}</p>
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Description</h1>
            <TextEditor editorRef={editorRef} />
            </div>
            

            <button type='submit' className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
             Login
            </button>
        </form>
    </div>
  )
}

export default CreateProduct
