import React from 'react'

const Profile = () => {
  return (
    <div className='py-10 px-5 md:px-10'>
        <h1 className="uppercase pb-5 border-b font-semibold text-center text-2xl">Account Info</h1>
        <div className="w-[100%] sm:w-[40%] mx-auto mt-8">
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Name</h1>
            <input placeholder='Name' className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className="mb-4">
            <h1 className='text-[15px] mb-1'>Email Address</h1>
            <input placeholder='Email' className='w-full border text-sm outline-none py-[8px] px-5 rounded-lg' />
            </div>
            <div className='w-full border text-center  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
            <h1>Edit Profile</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile
