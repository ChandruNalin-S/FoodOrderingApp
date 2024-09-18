import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



// store have big/large reducer object which is contains of slice of each reducer.
const appStore = configureStore({
  reducer:{
    cart: cartReducer,
  }
});


export default appStore;