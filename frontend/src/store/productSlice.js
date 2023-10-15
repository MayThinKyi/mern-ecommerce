import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      filteredProducts:[],
      filterOptions:{
        searchQuery:'',
        brand:'all',
        category:'all',
        price:'all',
        sort:'newArrival'
      }
    },
    reducers: {
     filterProducts:(state,action)=>{
        if(state.filterOptions.searchQuery) state.filteredProducts=state.products.filter((p)=>p?.name?.toLowerCase()?.includes(state.filterOptions.searchQuery?.toLowerCase()))
        else state.filteredProducts=state.products
        if(state.filterOptions.brand!=='all'){
           if(state.filterOptions.brand==='apple') state.filteredProducts=state.filteredProducts?.filter((p)=>p?.brand?.toLowerCase()==='apple')
           
        }
        if(state.filterOptions.category!=='all'){
            if(state.filterOptions.category==='mobile')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.category?.toLowerCase()==='mobile');
            if(state.filterOptions.category==='notebooks')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.category?.toLowerCase()==='notebooks');
            if(state.filterOptions.category==='watch')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.category?.toLowerCase()==='watch');

          }
        if(state.filterOptions.price!=='all'){
        if(state.filterOptions.price==='1to500')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.price>1&&p?.price<=500);
        if(state.filterOptions.price==='500to1500')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.price>=500&&p?.price<=1500);
        if(state.filterOptions.price==='1500to3000')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.price>=1500&&p?.price<=3000);
        if(state.filterOptions.price==='3000to5000')  state.filteredProducts=state.filteredProducts.filter((p)=>p?.price>=3000&&p?.price<=5000);
        }
        if(state.filterOptions.sort!=='newArrival'){
            if(state.filterOptions.sort==='htl')  state.filteredProducts=state.filteredProducts.sort((a,b)=>b.price-a.price);
            if(state.filterOptions.sort==='lth')  state.filteredProducts=state.filteredProducts.sort((a,b)=>a.price-b.price);
        }

    },
     setFilterOptions:(state,action)=>{
      state.filterOptions={...state.filterOptions,[action.payload.id]:action.payload.val}
    },
    setProducts:(state,action)=>{
          state.products=action.payload
        state.filteredProducts=action.payload
       
    }
    },
  })
  
  export const {filterProducts,setFilterOptions,setProducts} = productSlice.actions
  
  export default productSlice.reducer