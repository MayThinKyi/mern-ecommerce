import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderHistoryModal from '../components/order/OrderHistoryModal';

const OrderHistory = () => {
  const [orderHistory,setOrderHistory]=useState(null);
  const user=useSelector((state)=>state.user.user)
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/orders/${user.id}`)
    .then((res)=>{
      console.log(res.data)
      setOrderHistory(res.data)
    })
    .catch((err)=>console.log(err))
  },[user])
  return (
    <div className='py-10 px-5 md:px-10'>
        <h1 className="uppercase pb-5 border-b font-semibold text-center text-2xl">Order History</h1>
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
       </div>
    </div>
  )
}

export default OrderHistory
