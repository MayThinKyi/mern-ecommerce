import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const UserListPagination = ({userLists}) => {
    const user=useSelector((state)=>state.user.user);
    const [paginatedUserLists,setPaginatedUserLists]=useState(null);
    const [page,setPage]=useState(1);
    const roleChangeHandler=(userId)=>{
        if(window.confirm('Are you sure to change role for this user?')){
           axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/users/roleChange/${userId}`)
           .then((res)=>{
            toast.success(res.data);
            window.location.reload()
           })
           .catch(err=>console.log(err))
        }

    }
    const userDeleteHander=(userId)=>{
        if(userId!==user.id){
            if(window.confirm('Are you sure to delete this user?')){
                axios.delete(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/users/${userId}`)
            .then((res)=>{
                toast.success(res.data)
                window.location.reload();
            })
            .catch(err=>console.log(err))
            }
        }
    }
    useEffect(()=>{
        setPaginatedUserLists(userLists?.slice(page*6-6,page*6))
    },[page,userLists])
  return (
    <div>
      <h1 className='pb-8 text-2xl font-semibold text-center border-b'> User List</h1>
      <div className='overflow-x-scroll lg:overflow-x-hidden'>
       <table className='text-[14px] md:text-[16px] mx-auto my-5 border-collapse border border-slate-400'>
            <thead>
                <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
                </tr>
            </thead>
            <tbody className='text-[14px] cursor-pointer'>
                {paginatedUserLists?.map((u)=>{
                    return <tr >
                    <td>{u?._id}</td>
                    <td>{u?.name}</td>
                    <td>{u?.email}</td>
                    <td>
                        <select disabled={user.id===u?._id} value={u?.role} onChange={()=>roleChangeHandler(u?._id)} className='px-2 py-1 border rounded-lg outline-none'>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </td>
                    <td onClick={()=>userDeleteHander(u?._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

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
        pageCount={Math.ceil(userLists?.length/6)}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
       </div>
    </div>
  )
}

export default UserListPagination
