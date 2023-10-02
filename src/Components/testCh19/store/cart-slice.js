import { createSlice } from "@reduxjs/toolkit";
const initialStateCart = {
  showCart: false,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    //client 
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.items.find((x) => x.id === newItem.id);

      state.totalQuantity++;

      if (!existItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        state.totalPrice = state.totalPrice + existItem.price;
        existItem.quantity++;
        existItem.totalPrice = existItem.price * existItem.quantity;
      }
    },
     //client 
    removeItemFromCart: (state, action) => {
      let id=action.payload;
      let existItem = state.items.find((x) => x.id === id);

      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existItem.price;

      if (existItem.quantity > 1) {
        existItem.quantity = existItem.quantity - 1;
        existItem.totalPrice = existItem.price * existItem.quantity;
      } else {
         state.items = state.items.filter((x) => x.id !== id);
      }
    },
    SetItems: (state, action) => {
      // showCart:action.payload,
      state.items = action.payload || [];
      state.totalQuantity  = 0;
      state.totalPrice  =0;
      state.items.forEach((x) => {
        state.totalQuantity += x.quantity;
        state.totalPrice += x.totalPrice;
      });
    },
    //server
    addOrUpdateItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.items.find((x) => x.id === newItem.id);
      if (existItem && newItem.quantity === 0) {
        //removeItemFromCart()
        state.totalQuantity -= existItem.quantity;
        state.totalPrice = state.totalPrice - existItem.totalPrice;
        state.items = state.items.filter((x) => x.id !== existItem.id);
        return;
      }

      if (newItem.quantity === 0)
      return;
 
      if (!existItem) {
       const nn= {
          id: newItem.id,
          name: newItem.name,
          quantity: newItem.quantity,
          price: newItem.price,
          totalPrice: newItem.price * newItem.quantity,
        }
        state.items.push(nn);
        state.totalPrice +=  nn.totalPrice;
        state.totalQuantity += newItem.quantity;
      } else {
        let quantityNew =   newItem.quantity - existItem.quantity;
       
        if (quantityNew !== 0) {
          state.totalPrice += quantityNew * existItem.price;
          existItem.quantity  = newItem.quantity;
          existItem.totalPrice = existItem.price * existItem.quantity;
          state.totalQuantity += quantityNew;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
