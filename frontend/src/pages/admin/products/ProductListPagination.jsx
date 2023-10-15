import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const ProductListPagination = ({productLists}) => {
    const [paginatedProductLists,setPaginatedProductLists]=useState(productLists);
    const [page,setPage]=useState(1);
    const deleteProductHandler=(productId)=>{
        if(window.confirm('Are you sure to delete this product?')){
          axios.delete(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/${productId}`)
          .then((res)=>{
            console.log(res.data)
            toast.success(res.data)
            window.location.reload()
          }).catch((err)=>console.log(err))
        }
      }
    useEffect(()=>{
        //pg1 => 0 to 6 
        //pg2=> 6 to 12
        //pg3=>12 to 18
        setPaginatedProductLists(productLists?.slice(page*6-6,page*6))
        console.log(productLists?.slice(page*6-6,page*6))
    },[page,productLists])
  return (
    <div>
      <h1 className='pb-8 text-2xl font-semibold text-center border-b'> Product List</h1>
    <div className='overflow-x-scroll lg:overflow-x-hidden'>
     <table className='text-[14px] md:text-[16px] mx-auto my-5 border-collapse border border-slate-400'>
          <thead>
              <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Brand</th>
              <th></th>
              </tr>
          </thead>
          <tbody className='text-[14px] cursor-pointer'>
             {paginatedProductLists?.map((p)=>{
                return <tr >
                <td>{p?._id}</td>
                <td>{p?.name}</td>
                <td>
                  <img className='h-[50px] w-auto object-contain' src={p?.image} />
                </td>
                <td>{p?.price}</td>
                <td>{p?.brand}</td>
                <td className='flex items-center justify-center gap-x-3'>
                    <Link to={`/admin/edit-product/${p?._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                    </Link>
                    <div onClick={()=>deleteProductHandler(p?._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </div>

                </td>
            </tr>
             })} 
            
          </tbody>
      </table>
      <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e)=>setPage(e.selected+1)}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(productLists?.length/6)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
     </div>
    </div>
  )
}

export default ProductListPagination
