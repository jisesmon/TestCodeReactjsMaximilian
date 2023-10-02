import {configureStore } from "@reduxjs/toolkit"; 
import cartSlice from "./cart-slice";
import bookSlice from "./book-slice";
//!!!  Multiple State   
  
export const store=configureStore({
reducer:
{
  cart:cartSlice.reducer,
  book:bookSlice.reducer
 }
});
