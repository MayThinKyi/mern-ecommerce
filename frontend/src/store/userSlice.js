import { createSlice } from '@reduxjs/toolkit'
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
        }

    }
})
export const {setUser,userLogout} = userSlice.actions
  
  export default userSlice.reducer
