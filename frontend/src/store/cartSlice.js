import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:JSON.parse(localStorage.getItem('mern-ecommerce-cart'))||[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const isProductExist=state.cart.find(c=>c.productId===action.payload.productId);
            if(isProductExist){
                state.cart= state.cart.map(c=>{
                    if(c.productId===action.payload.productId) return c={...c,quantity:c.quantity+action.payload.quantity}
                    else return c
                })
                localStorage.setItem('mern-ecommerce-cart',JSON.stringify(state.cart))

            }else{
                state.cart=[...state.cart,action.payload];
            localStorage.setItem('mern-ecommerce-cart',JSON.stringify(state.cart))
            }
        },
        deleteCartItem:(state,action)=>{
            const cartIdToDelete=action.payload.cartId;
            state.cart=state.cart.filter(c=>c.cartId!==cartIdToDelete)
            localStorage.setItem('mern-ecommerce-cart',JSON.stringify(state.cart))
        },
        updateQuantity:(state,action)=>{
            const {cartId,status}=action.payload;
            state.cart=state.cart.map((c)=>{
                if(c.cartId===cartId){
                    if(status==='plus') c={...c,quantity:c.quantity+1}
                    if(status==='minus'){
                        if(c.quantity>1)  c={...c,quantity:c.quantity-1} 
                    }
                    return c;
                }
                else return c;
            })
            localStorage.setItem('mern-ecommerce-cart',JSON.stringify(state.cart))

        },
        placeOrder:(state,action)=>{
            const {token,total,user}=action.payload;
            axios.post(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/orders/createOrder`,action.payload)
            .then((res)=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
        },
        removeCart:(state)=>{
            state.cart=[];
            localStorage.removeItem('mern-ecommerce-cart')
        }


    }
})
export const {addToCart,deleteCartItem,updateQuantity,placeOrder,removeCart} = cartSlice.actions
  
  export default cartSlice.reducer
