import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import AddReviewSection from '../components/shop/AddReviewSection';
import Reviews from '../components/shop/Reviews';
import ReactStars from "react-rating-stars-component";
import Spinner from './../components/ui/Spinner';
import ProductSkeleton from '../components/ui/loading/ProductSkeleton';
import { addToCart } from '../store/cartSlice';
import toast from 'react-hot-toast';

const Product = () => {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user)
    const {productId}=useParams();
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(false);
    const addToCartHandler=()=>{
      dispatch(addToCart({
        cartId:Math.random(),
        productId:product._id,
        name:product.name,
        quantity:1,
        price:product.price,
        brand:product.brand,
        image:product.image,
      }))
      toast.success('Added to cart successfully!')
    }
    useEffect(()=>{
      setLoading(true)
      axios.get(`https://mern-ecommerce-rf2p.onrender.com/api/products/${productId}`)
      .then((res)=>{
        setProduct(res.data)
        setLoading(false);
      })
      .catch((err)=>console.log(err))
    },[productId])
  return (
    <div className='px-5 py-10 sm:px-10'>
      {loading ? <ProductSkeleton/>  : <>
      <div className="flex flex-wrap pb-10 border-b md:flex-nowrap gap-x-20">
        <div className=' p-8 bg-[#FAFAFA]'>
        <img className='object-contain w-auto h-[160px]' src={product?.image}/>
        </div>
        <div>
          <h1 className='mb-2 text-xl font-semibold '>{product?.name}</h1>
          <div className="flex items-center gap-x-1">
          <ReactStars
                edit={false}
                value={1}
                count={1}
                size={24}
                activeColor="#ffd700"
                />
                <p className='text-lg font-semibold text-zinc-600'>{product?.overallRating || 1}</p>
          </div>
          <h1 className='mb-1'>Brand : {product?.name}</h1>
          <h1 className='mb-1'>Model : {product?.name}</h1>
          <h1 className='mb-1'>Price : {product?.price}</h1>
        
          <button onClick={addToCartHandler} className='mb-1 mt-3 px-5 py-[6px] text-sm text-white transition-all duration-150 ease-in border bg-slate-800 hover:bg-white hover:text-black hover:border-black'>Add To Cart</button>
          <h1 className='mt-6 mb-2 text-xl font-semibold'>About this item</h1>
          <p>{product?.description}</p>
        </div>
      </div>
      {user?.name ? <AddReviewSection productId={product?._id} /> : 
      <p className='py-8 text-center border-b'>Please Login to post a review <Link to={'/login'} className='underline text-zinc-800 font-[500]'>login</Link></p>}
      <Reviews product={product} /></> }
    </div>
  )
}

export default Product
