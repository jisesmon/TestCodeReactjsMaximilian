import { bookActions } from "./book-slice";
import {
  apiBookGetAll,
  apiBookAdd,
  apiBookUpdate,
  apiBookDelete,
} from "../Api/ApiBook";
export const actionBookGetAll = () => {
  return async (dispatch) => {
    let response = await apiBookGetAll();
    if (response) {
      if (response.status === 200)
        dispatch(bookActions.SetBooks(response.data));

      console.log(response.status);
    }
  };
};
export const actionBookAdd = (bookItem) => {
  return async (dispatch) => {
    let response = await apiBookAdd(bookItem);
    if (response) {
      console.log(response.status);

      if (response.status === 200 || response.status === 201)
        dispatch(bookActions.addBook(bookItem));
    }
  };
};
export const actionBookUpdate = (bookItem) => {
  return async (dispatch) => {
    let response = await apiBookUpdate(bookItem);
    if (response) {
      console.log(response.status);
      if (response.status === 200 || response.status === 201)
        dispatch(bookActions.updateBook(bookItem));
    }
  };
};
export const actionBookDelete = (idCart) => {
  return async (dispatch) => {
    let response = await apiBookDelete(idCart);
    if (response) {
      console.log(response.status);

      if (response.status === 200 || response.status === 204)
        dispatch(bookActions.removeBook(idCart));
    }
  };
};
