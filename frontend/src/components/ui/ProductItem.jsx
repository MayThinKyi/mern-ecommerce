import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='px-5 py-4 rounded-lg bg-[#FAFAFA] cursor-pointer'>
      <img className='h-[160px] mx-auto object-contain pb-4 border-b hover:scale-110 transition-all duration-200 ease-in'  src={product?.image} />
      <p className='text-[14px] text-zinc-500 mt-2'>{product?.brand}</p>
      <h1 className='font-[500] '>{product?.name}</h1>
      <h1 className='text-[15px] '>$ {product?.price}</h1>
      <button className='mt-2 w-[100%] text-[13px] px-6 py-1 text-sm border rounded-lg'>ADD TO CART</button>
    </div>
  )
}

export default ProductItem
