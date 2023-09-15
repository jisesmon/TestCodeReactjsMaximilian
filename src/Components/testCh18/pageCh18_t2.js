import React from "react";
import  { useDispatch, useSelector} from "react-redux/es";  
 import { cartActions } from "./reduxjs-toolkit-store-t2/cartSlice";
 import { bookActions } from "./reduxjs-toolkit-store-t2/bookSlice";
const PageCh18_t2 = () => {
    const dispatch = useDispatch();
    
    const showCart=useSelector(state=>state.cart.showCart);
    const books=useSelector(state=>state.book.books);
  const toggleHandler = () => {
   // dispatch({type:'toggleShowCart'});
    //console.log('showCart ',showCart);
    dispatch(cartActions.toggleShowCart())
  };
  const deletedBookHandler = (id) => {
    //dispatch({type:'removeBook',id:id});
    dispatch(bookActions.removeBook(id));
  };
  const addBookHandler = () => {
    let x= Math.floor(Math.random()* 1000);
   // dispatch({type:'addBook',item:{ id: x, name: "math"+x.toString() }});
   dispatch(bookActions.addBook({ id: x, name: "math"+x.toString() }));
  };

  const updateBookHandler = (id,name) => {
    let x= Math.floor(Math.random()* 1000);
    dispatch(bookActions.updateBook({ id: id, name: "math-"+x.toString() }));
  };
  //!! <Provider store={store}> must in app.js but to this section test
  return (
    // <Provider   store={store}>
      <div>
        <hr />
        <h2 className="m-2">PageCh18_t2 By  @reduxjs-toolkit   --Multiple State</h2>
        <figure className="figure p-4">
          <p>State showCart :{showCart.toString()}</p>
          <button  className="btn btn-primary btn-sm m-2"
            onClick={toggleHandler} > toggle Show Cart
          </button>
          <h3>State books  </h3>
           <button className="btn btn-info  m-2"     onClick={addBookHandler} >
             add Book randomn
           </button>
       <ul>
         {books && books.length > 0 && books.map(x => {
           return <li key={x.id} className="p-2"><strong>{x.id}</strong> {x.name} 
            <button className="btn btn-success  m-2"   onClick={updateBookHandler.bind(null,x.id,x.name)}    >
               
          <i className="bi-pencil"></i>
           </button>

           <button className="btn btn-danger  m-2"      onClick={deletedBookHandler.bind(null,x.id)}  >
               
           <i className="bi-x-circle"></i>
           </button></li>
         })}
       </ul>
        </figure>
      </div>
    // </Provider>
  );
};
export default PageCh18_t2;
