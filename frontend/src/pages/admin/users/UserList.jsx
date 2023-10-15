import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import UserListPagination from './UserListPagination';
import TableSkeleton from '../../../components/ui/loading/TableSkeleton';
const UserList = () => {
    const [userLists,setUserLists]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
        axios.get(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/users`)
        .then((res)=>{
          setUserLists(res.data)
          setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      {loading? <TableSkeleton /> : 
      <UserListPagination userLists={userLists} />  }
    </div>
  )
}

export default UserList
