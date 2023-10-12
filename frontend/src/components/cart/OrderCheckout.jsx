import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder, removeCart } from '../../store/cartSlice';

const OrderCheckout = ({total}) => {
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cart.cart);
    const user=useSelector((state)=>state.user.user);
    const tokenHandler=(token)=>{
        dispatch(placeOrder({token,total,user,cart}))
        dispatch(removeCart());
    }
  return (
    <StripeCheckout 
    name="MERN Ecommerce"
    amount={total*100}
    currency="USD"
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51MFFV7Hyjgtosq2qjXQYzmkIVWP02NBCW5Xakb3h9iamgp8uQ4cZ2i01w5Qgjq1avOAYeGqCVz89ZeMbeXOEmvBJ008F65RNxt'
    >
    <div className='w-[100%] text-center border  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
      <h1>Order</h1>
    </div>
    </StripeCheckout>
  )
}

export default OrderCheckout
