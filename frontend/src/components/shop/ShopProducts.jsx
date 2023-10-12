import React from 'react'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterOptions } from '../../store/productSlice';

const ShopProducts = () => {
  const dispatch=useDispatch();
  const filterOptions=useSelector((state)=>state.products.filterOptions)
  const filteredProducts=useSelector((state)=>state.products.filteredProducts)

  const sortHandler=(id,val)=>{
    dispatch(setFilterOptions({id:id,val}))
  }
  return (
    <div className='w-[100%]'>
      <div className='p-5 rounded-xl border flex items-center justify-between'>
        <h1>Showing Results of {filteredProducts.length}</h1>
        <div className='flex items-center gap-x-4'>
            <h1>Sort by</h1>
            <select value={filterOptions.sort} onChange={(e)=>sortHandler('sort',e.target.value)} className='outline-none border rounded-lg px-3 py-1'>
                <option value="newArrival" >New Arrival</option>
                <option value="htl">Price: High to Low</option>
                <option value="lth">Price: Low to High</option>
            </select>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default ShopProducts
