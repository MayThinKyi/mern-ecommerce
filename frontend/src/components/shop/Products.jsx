import React, { useEffect, useState } from 'react'
import ProductItem from '../ui/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/productSlice';
import axios from 'axios';
import Spinner from '../ui/Spinner';
import ShopSkeleton from '../ui/loading/ShopSkeleton';
const Products = () => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false);
  const products=useSelector((state)=>state.products.filteredProducts);
  useEffect(()=>{
    setLoading(true)
    axios.get('https://mern-ecommerce-rf2p.onrender.com/api/products/getAllProducts')
      .then((res)=>{
        dispatch(setProducts(res.data))
        setLoading(false)
      }).catch(err=>console.log(err))
  },[])
  return (
    <>
          {loading ?  <ShopSkeleton/> : 

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 mt-14 gap-x-3 gap-y-5">
      {products?.map((item)=>{
            return <ProductItem key={item?._id} product={item} />
          })}
    </div> }

    </>
  )
}

export default Products
