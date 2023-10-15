import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import ProductListPagination from './ProductListPagination';
import TableSkeleton from '../../../components/ui/loading/TableSkeleton';

const ProductList = () => {
    const [productLists,setProductLists]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
        axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/getAllProducts`)
        .then((res)=>{
          setProductLists(res.data)
          setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      {loading ? <TableSkeleton /> :
    <ProductListPagination productLists={productLists} /> }
  </div>
  )
}

export default ProductList
