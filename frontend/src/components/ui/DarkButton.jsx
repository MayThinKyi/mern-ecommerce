import React from 'react'
import { Link } from 'react-router-dom'

const DarkButton = ({title,link}) => {
  return (
    <Link to={link} className='w-[max-content] border  rounded-lg py-2 px-5 md:py-3 sm:px-10 text-sm lg:text-md cursor-pointer font-[400] bg-[#0F2027] transition-all duration-150 ease-in text-white hover:bg-white hover:border-black hover:text-black'>
      <h1>{title}</h1>
    </Link>
  )
}

export default DarkButton
