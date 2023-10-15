import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import TextEditor from '../../../components/admin/product/TextEditor';

const EditProduct = () => {
    const navigate=useNavigate();
    const {productId}=useParams();
    const [product,setProduct]=useState(null);
    const inputOnChange=(e)=>{
        setProduct({...product,[e.target.id]:e.target.value})
    }
      const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log({...product,description:editorRef.current.getContent()})
        //console.log(data,'des',editorRef.current.getContent())
        axios.put(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/${productId}` ,{...product,description:editorRef.current.getContent()})
        .then(res=>{
          console.log(res.data)
          toast.success('Product updated successfully!')
          navigate('/admin/products')
        })
        .catch(err=>{console.log(err)
          toast.error(err.response.data.error)}) 
      };

      const editorRef = useRef(null);
      useEffect(()=>{
        axios.get( `${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/${productId}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
            
        })
        .catch(err=>console.log(err))
      },[])
      return (
    <div  className='px-5 py-10 sm:px-10 w-[100%] md:w-[80%] lg:w-[60%] mx-auto '>
        <h1 className='pb-8 text-2xl font-semibold text-center border-b'>Edit Product {productId}</h1>
        <form onSubmit={onSubmitHandler} className="mt-8 ">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Name</h1>
            <input placeholder='Name' id='name' value={product?.name} onChange={inputOnChange} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Brand</h1>
            <input placeholder='Brand' id='brand' value={product?.brand}  onChange={inputOnChange} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Category</h1>
            <input placeholder='Category' id='category' value={product?.category}  onChange={inputOnChange} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Price</h1>
            <input placeholder='Price' id='price' value={product?.price}  onChange={inputOnChange} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Image</h1>
            <input placeholder='Image URL' id='image' value={product?.image}  onChange={inputOnChange} className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Description</h1>
            <TextEditor editorRef={editorRef}  value={product?.description}/>
            </div>
            

            <button type='submit' className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
             Update Product
            </button>
        </form>
    </div>
  )
}

export default EditProduct
