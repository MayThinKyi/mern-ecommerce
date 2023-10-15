import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderHistoryModal from '../components/order/OrderHistoryModal';
import { useNavigate } from 'react-router-dom';
import TableSkeleton from '../components/ui/loading/TableSkeleton';

const OrderHistory = () => {
  const navigate=useNavigate();
  const [orderHistory,setOrderHistory]=useState(null);
  const [loading,setLoading]=useState(false);
  const user=useSelector((state)=>state.user.user)
  useEffect(()=>{
    setLoading(true)
    if(user?.name){
      axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/orders/${user.id}`)
    .then((res)=>{
      console.log(res.data)
      setOrderHistory(res.data)
      setLoading(false)
    })
    .catch((err)=>console.log(err))
    }else navigate('/login')
  },[user])
  return (
    <div className='px-5 py-10 md:px-10'>
        <h1 className="pb-5 text-2xl font-semibold text-center uppercase border-b">Order History</h1>
       {loading ? <TableSkeleton/> :
       <div className='overflow-x-scroll lg:overflow-x-hidden'>
       <table className='text-[14px] md:text-[16px] mx-auto my-5 border-collapse border border-slate-400'>
            <thead>
                <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Total Amount</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody className='text-[14px] cursor-pointer'>
               {orderHistory?.map((o)=>{
                return  <tr key={o?._id}>
                <td><OrderHistoryModal order={o} /></td>
                <td>{o?.name}</td>
                <td>{o?.email}</td>
                <td>{o?.transactionId}</td>
                <td>{o?.total}</td>
                <td>{o?.status}</td>
            </tr>
               })}
            </tbody>
        </table>
       </div> }
    </div>
  )
}

export default OrderHistory
