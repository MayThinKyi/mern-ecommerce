import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user.user);
  useEffect(()=>{
    if(user && user.role==='admin') {}
    else navigate('/')
  },[])
  return (
    <div className='px-5 py-10 sm:px-10 '>
      <h1 className='pb-8 text-2xl font-semibold text-center border-b'> Admin Dashboard</h1>
    <div className="flex items-center justify-center mx-auto my-6 font-semibold underline gap-x-10">
        <Link to={'/admin/dashboard'}>User List</Link>
        <Link to={'/admin/products'}>Product List</Link>
        <Link to={'/admin/create-product'}>Create Product</Link>

        <Link to={'/admin/orders'}>Order List</Link>

        
    </div>
    <Outlet/>
    </div>
  )
}

export default Dashboard
