import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:JSON.parse(localStorage.getItem('mern-ecommerce-user')) || []
    },
    reducers:{
        setUser:(state,action)=>{
            const {token,user:{name,_id}}=action.payload;
            state.user={
                token,
                name,
                id:_id
            }
            localStorage.setItem('mern-ecommerce-user',JSON.stringify(state.user));
        },
        userLogout:(state)=>{
            state.user=[];
            localStorage.removeItem('mern-ecommerce-user')
        },
        updateUserProfile:(state,action)=>{
            axios.put('https://mern-ecommerce-rf2p.onrender.com/api/users/updateProfile',action.payload)
            .then((res)=>{
             console.log(res.data)
            })
            .catch(err=>console.log(err))
            state.user.name=action.payload.name;
            localStorage.setItem('mern-ecommerce-user',JSON.stringify(state.user));

        }


    }
})
export const {setUser,userLogout,updateUserProfile} = userSlice.actions
  
  export default userSlice.reducer
