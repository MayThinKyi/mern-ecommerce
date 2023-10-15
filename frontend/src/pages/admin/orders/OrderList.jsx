import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import OrderListPagination from './OrderListPagination';
import TableSkeleton from '../../../components/ui/loading/TableSkeleton';

const OrderList = () => {
const [orderLists,setOrderLists]=useState(null);
const [loading,setLoading]=useState(false);
useEffect(()=>{
  setLoading(true)
axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/orders/`)
.then((res)=>{
  setOrderLists(res.data)
  setLoading(false)
})
.catch(err=>console.log(err))
},[])
  return (
    <div>
      {loading? <TableSkeleton/> :
    <OrderListPagination orderLists={orderLists} /> }
  </div>
  )
}

export default OrderList
