import React, { useState } from 'react'
import ShopSideBar from '../components/shop/ShopSideBar'
import ShopProducts from '../components/shop/ShopProducts'

const Shop = () => {

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-x-3 py-10 px-5 mb-20'>
        <ShopSideBar />
        <ShopProducts  />
    </div>
  )
}

export default Shop
