import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderCheckout from './OrderCheckout';

const CartOrder = () => {
  const user=useSelector((state)=>state.user.user);
  const cart=useSelector((state)=>state.cart.cart);
  const [totalItems,setTotalItems]=useState(0);
  let [totalPrice,setTotalPrice]=useState(0);
  useEffect(()=>{
    let item=0;
    cart?.map(c=>item+= c.quantity)
    setTotalItems(item)
    let total=0;
    cart?.map(c=>total+=c.quantity*c.price);
    setTotalPrice(total)
  },[cart])
  return (
    <div className='w-[100%] md:w-[60%] xl:w-[30%] p-10'>
    <div className="flex items-center justify-between mb-5 text-lg">
      <h1>Total Items:</h1>
      <h1>{totalItems}</h1>
    </div>
    <div className="flex items-center justify-between mb-8 text-lg">
      <h1>Total Price:</h1>
      <h1>${totalPrice}</h1>
    </div>
   {user?.name ?  <OrderCheckout total={totalPrice} /> : ''}
 </div>
  )
}

export default CartOrder
