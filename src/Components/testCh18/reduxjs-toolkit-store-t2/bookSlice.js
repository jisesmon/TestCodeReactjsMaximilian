import {createSlice } from "@reduxjs/toolkit"; 
const bookSlice=createSlice({
name:'book',
initialState:{books: [{ id: 12, name: "math" }] },
reducers:{
    addBook :(state,action)=> {
        state.books=  state.books.concat(action.payload)
      },
     removeBook :(state,action)=> {
        state.books=  state.books.filter(n=>n.id !== action.payload) 
      },
      
      updateBook :(state,action)=> {
        state.books=  state.books.filter(n=>n.id !== action.payload.id);
        state.books=  state.books.concat(action.payload);
      }
     
}
});

export const bookActions=bookSlice.actions;

export default bookSlice;
