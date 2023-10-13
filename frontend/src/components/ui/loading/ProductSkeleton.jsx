import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className='flex flex-wrap px-0 sm:px-10 md:px-[50px] pb-10 border-b md:flex-nowrap gap-x-10 '>
        <div className='mb-5 h-[250px] w-[100%] md:w-[30%] mx-auto rounded-xl bg-gray-200'> </div>
        <div className='w-[100%]  md:w-[60%]'>
        <div className="h-3 bg-gray-200 rounded-full  mb-4"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-5"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-5"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-5"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-5"></div>
          <div className='h-6 mt-4 bg-gray-200 rounded-lg'></div>
          <div className='h-[150px] mt-10 bg-gray-200 '></div>
          </div>
        </div>
  )
}

export default ProductSkeleton
