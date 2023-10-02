import {createSlice } from "@reduxjs/toolkit"; 
const bookSlice=createSlice({
name:'book',
initialState:{books: [{ id: 12, name: "math-12",price:2500 ,quantity:10 }] },
reducers:{
    addBook :(state,action)=> {
        state.books.push(action.payload)
      },
     removeBook :(state,action)=> {
        state.books=  state.books.filter(n=>n.id !== action.payload) 
      },
      
      updateBook :(state,action)=> {
       const existItem=state.books.find(x=>x.id===action.payload.id);
       if(existItem){
         existItem.name = action.payload.name ; 
         existItem.price = action.payload.price ; 
         existItem.quantity = action.payload.quantity ; 
       }
      },
      updateQuantity :(state,action)=> {
        const existItem=state.books.find(x=>x.id===action.payload.id);
       if(existItem){
        existItem.quantity=existItem.quantity-action.payload.requestQuantity; 
       }

      },
      SetBooks: (state, action) => {
        // showCart:action.payload,
        state.books = action.payload || [];
         
      },

}
});

export const bookActions=bookSlice.actions;

export default bookSlice;
