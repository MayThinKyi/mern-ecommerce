import React from 'react'
import loader from '../../images/loader.svg'
const Spinner = () => {
  return (
    <>
        <img src={loader} className='my-10 h-[80px] w-[80px] block mx-auto ' />
    </>
  )
}

export default Spinner
