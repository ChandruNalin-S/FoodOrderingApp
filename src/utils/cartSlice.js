import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[],
  },
  reducers:{
    addItem: (state, action)=>{
      state.items.push(action.payload);
    },
    removeItem: (state)=>{
      state.items.pop();
    },
    clearCart:(state)=>{
      // if you want console in redux we have use current function;
      console.log(current(state));
      //state.items = [];
      // either mutate the state or return a new state.
      //return {items:[]} // it is new state of array object and it will replaced the original state with these. so the items: [];
      state.items.length = 0// [] empty the items array
    }
  }
});


/*
note: whenever we create any slice, we should export/pass two things one is export actions of slice and second is to export reducer of the slice.

*/

export const {addItem,removeItem,clearCart} =  cartSlice.actions;

export default cartSlice.reducer;