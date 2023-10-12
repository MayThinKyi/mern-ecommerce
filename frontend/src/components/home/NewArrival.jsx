import React from 'react'
import ProductItem from '../ui/ProductItem'
import { data } from '../../data'

const NewArrival = () => {
  return (
    <div className='px-5 my-20 sm:px-10 lg:px-20'>
      <div className='mt-5  w-[max-content] border  rounded-lg py-1 px-3 md:py-2 sm:px-5 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
      <h1>NewArrival</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 mt-14 gap-x-10 gap-y-5">
        {data?.map((item,key)=>{
            return <ProductItem key={key} product={item} />
        })}
      </div>
    </div>
  )
}

export default NewArrival
