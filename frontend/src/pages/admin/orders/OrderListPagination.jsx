import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';

const OrderListPagination = ({orderLists}) => {
    const [paginatedOrderLists,setPaginatedOrderLists]=useState(orderLists);
    const [page,setPage]=useState(1);

    const orderStatusHandler=(orderId,status)=>{
        if(window.confirm('Are you sure to change this order Status?')){
          axios.put(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/orders/changeOrderStatus`,{orderId,status})
          .then((res)=>{
            console.log(res.data)
            toast.success(res.data)
            window.location.reload()
          }).catch(err=>console.log(err))
        }
      }
      useEffect(()=>{
        //pg1->0 to 6
        //pg2->6 to 12
        //pg3->12 to 18
        setPaginatedOrderLists(orderLists?.slice(page*6-6,page*6))

      },[page,orderLists])
  return (
    <div>
      <h1 className='pb-8 text-2xl font-semibold text-center border-b'> Order List</h1>
    <div className='overflow-x-scroll lg:overflow-x-hidden'>
     <table className='text-[14px] md:text-[16px] mx-auto my-5 border-collapse border border-slate-400'>
          <thead>
              <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Transaction ID</th>
              <th>Total Amount</th>
              <th>Status</th>
              </tr>
          </thead>
          <tbody className='text-[14px] cursor-pointer'>
        {paginatedOrderLists?.map((o)=>{
                return  <tr >
                <td>{o?._id}</td>
                <td>{o?.name}</td>
                <td>{o?.email}</td>
                <td>{o?.transactionId}</td>
                <td>{o?.total}</td>
                <td>
                  <select value={o?.status} onChange={(e)=>orderStatusHandler(o?._id,e.target.value)} className='px-3 py-1 border rounded-lg outline-none'>
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                
            </tr>
            })} 
            
          </tbody>
      </table>
      <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e)=>setPage(e.selected+1)}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(orderLists?.length/5)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
     </div>
    </div>
  )
}

export default OrderListPagination
