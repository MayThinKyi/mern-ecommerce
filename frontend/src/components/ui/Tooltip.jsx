import React from 'react'
import { useSelector } from 'react-redux'

const Tooltip = () => {
  const cart=useSelector((state)=>state.cart.cart);
  return (
    <div className='absolute top-[-10px] right-[-10px] px-[6px] text-sm text-white bg-black rounded'>
      {cart.length}
    </div>
  )
}

export default Tooltip
