import {configureStore } from "@reduxjs/toolkit"; 
import cartSlice from "./cartSlice";
import bookSlice from "./bookSlice";
//!!!  Multiple State   
  
export const storet2=configureStore({
reducer:
{
  cart:cartSlice.reducer,
  book:bookSlice.reducer
 }
});
