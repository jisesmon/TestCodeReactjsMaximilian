import {
  apiCartGetAll,
  apiCartAdd,
  apiCartUpdate,
  apiCartDelete,
  apiCartAddOrUpdateItem,
} from "../Api/ApiCart";
import { cartActions } from "./cart-slice";

export const actionCartGetAll = () => {
  return async (dispatch) => {
    let response = await apiCartGetAll();
    if (response) {
      if (response.status === 200)
        dispatch(cartActions.SetItems(response.data));

      console.log(response.status);
    }
  };
};
export const actionCartAdd = (cartItem) => {
  return async (dispatch) => {
    let response = await apiCartAdd(cartItem);
    if (response) {
      console.log(response.status);

      if (response.status === 200 || response.status === 201)
        dispatch(cartActions.addItemToCart(cartItem));
    }
  };
};
export const actionCartUpdate = (cartItem) => {
  return async (dispatch) => {
    // let response = await apiCart.cartUpdate(cartItem);
    let response = await apiCartUpdate(cartItem);
    if (response) {
      console.log(response.status);
      if (response.status === 200 || response.status === 201)
        dispatch(cartActions.addItemToCart(cartItem));
    }
  };
};
export const actionCartDelete = (idCart) => {
  return async (dispatch) => {
    let response = await apiCartDelete(idCart);
    if (response) {
      console.log(response.status);

      if (response.status === 200 || response.status === 204)
        dispatch(cartActions.removeItemFromCart(idCart));
    }
  };
};
//
export const actionCartAddOrUpdateItem = (cartItem) => {
  return async (dispatch) => {
    let response = await apiCartAddOrUpdateItem(cartItem);
    if (response) {
      console.log(response.status);

      if (response.status === 200 || response.status === 201)
        dispatch(cartActions.addOrUpdateItem(cartItem));
    }
  };
};
