import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, setFilterOptions } from '../../store/productSlice';

const SearchInput = ({displayProps}) => {
  const dispatch=useDispatch();
  const filterOptions=useSelector((state)=>state.products.filterOptions);
  useEffect(()=>{
    dispatch(filterProducts())
  },[filterOptions.searchQuery])
  return (
    <div className={`${displayProps} items-center gap-2 px-3 py-2 border rounded-lg flex `}>
      <svg className='h-[17px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input value={filterOptions.searchQuery} onChange={(e)=>dispatch(setFilterOptions({id:'searchQuery',val:e.target.value}))} className='outline-none ' placeholder='Search Product Name' />
    </div>
  )
}

export default SearchInput
