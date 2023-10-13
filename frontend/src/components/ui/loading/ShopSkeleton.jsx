import React from 'react'

const ShopSkeleton = () => {
  return (
    <div className='animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 mt-14 gap-x-3 gap-y-5'>
      {[...Array(8).keys()].map((i,index)=>{
        return <div key={index} className='px-5 py-5 rounded-xl bg-[#FAFAFA] cursor-pointer'>
        <div className='mb-5 h-[120px] w-[90%] mx-auto rounded-xl bg-gray-200'> 
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className='h-6 mt-4 bg-gray-200 rounded-lg'>
          </div>
        </div>
      })}
    </div>
  )
}

export default ShopSkeleton
