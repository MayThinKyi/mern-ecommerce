import React, { useEffect } from 'react'
import DarkButton from '../components/ui/DarkButton'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCartItem, updateQuantity } from '../store/cartSlice';
import CartOrder from '../components/cart/CartOrder';
import emptyCart from '../images/emptyCart.svg'
const Cart = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user.user);
  const cart=useSelector((state)=>state.cart.cart);

  
  return (
    <div className='py-10 md:px-10'>
      <h1 className="pb-5 text-2xl font-semibold text-center border-b">SHOPPING CART</h1>
      {cart.length>0  ?
      <div className='flex flex-wrap justify-between xl:flex-nowrap'>
       <div>
       {cart?.map((cart,key)=>{
          return <div key={key} className='flex items-center justify-between py-4 border-b select-none md:py-3'>
            <img src={cart?.image} className='h-[100px] sm:h-[150px] md:h-[100px] w-auto object-contain' />
            <div className="flex flex-col text-md md:text-lg gap-y-2 md:gap-y-0 md:flex-row md:items-center md:gap-x-8 lg:gap-x-14 ">
            <h1>{cart?.brand}</h1>
            <h1>{cart?.name}</h1>
            <h1>{cart?.price}</h1>
            <div className='flex items-center px-6 py-1 border gap-x-5 sm:gap-x-10'>
              <button onClick={()=>dispatch(updateQuantity({cartId:cart.cartId,status:'plus'}))} className='text-xl'>+</button>
              <h1>{cart?.quantity}</h1>
              <button onClick={()=>dispatch(updateQuantity({cartId:cart.cartId,status:'minus'}))} className='text-xl'>-</button>

            </div>
            <button onClick={()=>dispatch(deleteCartItem({cartId:cart?.cartId}))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
            </div>

          </div>
        })}
       </div>
       <CartOrder/>
      </div> :<>
      <img src={emptyCart} className='mt-8 h-[230px] w-auto mx-auto' alt='Empty Cart' />
        <div className="my-6 text-[15px] flex items-center justify-center gap-4">
        <span className='text-zinc-600'>Cart is Empty!</span>
      <Link to={'/shop'} className='underline'> Click here to go shopping</Link>
        </div>
      </>
      }
    </div>
  )
}

export default Cart
