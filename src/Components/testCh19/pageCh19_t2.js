import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { bookActions } from "./store/book-slice";
import httpAxios, { http, httpUpload } from "./Libs/http-common";
import { uploadFileAxios } from "./Libs/uploadFileAxios";
 
import { actionCartAdd, actionCartAddOrUpdateItem, actionCartGetAll } 
from "./store/cart-actions";
import { actionBookAdd, actionBookDelete, actionBookGetAll, actionBookUpdate } from "./store/book-actions";

const PageCh19_t2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCartGetAll());
    dispatch(actionBookGetAll());
  }, [dispatch])
  const showCart = useSelector((state) => state.cart.showCart);
  const books = useSelector((state) => state.book.books);
  const cartItems = useSelector((state) => state.cart.items);
  // const toggleHandler = () => {
  //  // dispatch({type:'toggleShowCart'});
  //   //console.log('showCart ',showCart);
  //   dispatch(cartActions.toggleShowCart())
  // };
  const deletedBookHandler = (id) => {
    //dispatch({type:'removeBook',id:id});
    //client way
    //dispatch(bookActions.removeBook(id));
    dispatch(actionBookDelete(id));
  };
  const addBookHandler = () => {
    let x = Math.floor(Math.random() * 1000);
    let quantity = Math.floor(Math.random() * 20) + 5;
    let price = Math.floor(Math.random() * 100) * 100;
  //client way
  //  dispatch(
  //     bookActions.addBook({
        // id: x,
        // name: "math" + x.toString(),
        // price: price,
        // quantity: quantity,
  //     })
  //   );
    //server way
    dispatch(actionBookAdd({ 
      id: x,
      name: "math" + x.toString(),
      price: price,
      quantity: quantity,}));
  }

  const updateBookHandler = (id, name) => {
    let quantity = Math.floor(Math.random() * 20) + 5;
    let price = Math.floor(Math.random() * 100) * 100;
    //client way dispatch(bookActions.updateBook({ id: id, name: name ,price:price,quantity:quantity  }));
   //server way
    dispatch(actionBookUpdate({ id: id, name: name ,price:price,quantity:quantity  }));
  };

  const addCartHandler = (book) => {
    //let item = books.find(x=>x.id===id);
    if (book.quantity > 0) {
      //actionApi
     const existCartItem = cartItems.find(x=>x.id===book.id);
     if(existCartItem)
       dispatch(actionCartAddOrUpdateItem({
        id: book.id,
        name: book.name,
        price: book.price,
        quantity: existCartItem.quantity+1,
        totalPrice: book.price*(existCartItem.quantity+1)
       }));
    else
       dispatch(actionCartAdd({
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: 1,
            totalPrice: book.price
          } ));
       
      dispatch(bookActions.updateQuantity({ id: book.id, requestQuantity: 1 }));
    }
  };
  const testHttpAndAxiosHandler = () => {
    //test Upload
    let url = "https://arpango.ir/api/product/uploadfile";
    url = "https://localhost:7134/api/product/uploadfile";
    //way  Axios
    /*uploadFileAxios(
      url,
      "gggg",

      (onprogress) => {
        console.log("onprogress A", onprogress);
      }
    );*/
    //way  http self
   /* httpUpload(
      url,
      { name: "xcvxcv" },
      (res) => {
        console.log("res A", res);
      },
      (err) => {
        console.log("err A", err);
      },
      (onprogress) => {
        console.log("onprogress A", onprogress);
      }
    );*/

    url = "https://localhost:7134/api/Account/StatusUser";
    // url="https://localhost:7134/api/Account/GetTestlogin";
    //url= "https://localhost:7134/api/cluster/getall";

    //way  http self
    /* http({
      url: url,
      success: (res) => {
        console.log("res A", res);
      },
      error: (err) => {
        console.log("err A", err);
      },
      // onprogress: (onprogress) => {
      //   console.log("onprogress A", onprogress);
      // },
    }); */
    httpAxios.get(url);


  };

 return (
    <div>
      <hr />
      <h2 className="m-2">PageCh19_t2  action Api Cart (with  server that data json server)(server  way ) </h2>
      <p>json-server http://localhost:8000/carts</p>
      <p>http://localhost:8000/books</p>
      <figure className="figure p-4">
        <p>   show Cart for top Page:{showCart.toString()}</p>
        {/* <button  className="btn btn-primary btn-sm m-2"
            onClick={toggleHandler} > toggle Show Cart
          </button> */}
        <h3> please buy book ! </h3>
        <button className="btn btn-info  m-2" onClick={addBookHandler}>
          add Book randomn
        </button>
        <ul>
          {books &&
            books.length > 0 &&
            books.map((x) => {
              return (
                <li key={x.id} className="p-2">
                  <strong>{x.id}</strong> {x.name} price :{x.price} quantity
                  {x.quantity}{" "}
                  <button
                    className="btn btn-success  m-2"
                    onClick={updateBookHandler.bind(null, x.id, x.name)}
                  >
                    <i className="bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger  m-2"
                    onClick={deletedBookHandler.bind(null, x.id)}
                  >
                    <i className="bi-x-circle"></i>
                  </button>
                  <button
                    className="btn btn-info  m-2"
                    onClick={addCartHandler.bind(null, x)}
                  >
                    <i className="bi-cart"></i>
                  </button>
                </li>
              );
            })}
        </ul>

        <button className="btn btn-info  m-2" onClick={testHttpAndAxiosHandler}>
            test http and axios
        </button>
      </figure>
    </div> 
  );
};
export default PageCh19_t2;
