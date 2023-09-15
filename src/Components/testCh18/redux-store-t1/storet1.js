import {createStore } from "redux";
//!!!  Multiple State   
const initilStatet1 = {
  books: [{ id: 12, name: "math" }],
  showCart: false,
};

const t1Reducer =  (state = initilStatet1, action) => {
  if (action.type === "addBook") {
    return {
        showCart:state.showCart,
        books:state.books.concat(action.item)
    };
  }

  if (action.type === "removeBook") {
    return {
        showCart:state.showCart,
        books:state.books.filter(n=>n.id !== action.id) 
    };
  }

  if (action.type === "updateBook") {
  let books=  state.books.filter(n=>n.id !== action.item.id);
    return {
        showCart:state.showCart,
        books:books.concat(action.item)
    };
  }
  if (action.type === 'toggleShowCart') {
      return {
          showCart:!state.showCart,
          books:state.books
      };
    }
  

  return state;
};

export const storet1=createStore(t1Reducer);
