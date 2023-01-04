import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
      const item = state.products.find(items => items.id === action.payload.id)
      if(item){
        {}
      }else{
        state.products.push(action.payload)
      }
    },
    removefromcart: (state,action) => {
      state.products = state.products.filter((item)=>item.id !== action.payload)
    },
    clearcart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart, removefromcart, clearcart } = cartSlice.actions

export default cartSlice.reducer