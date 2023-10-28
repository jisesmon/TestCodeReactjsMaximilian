import React from "react";
import  { useDispatch, useSelector} from "react-redux";  
 import { bookActions } from "../testCh19/store/book-slice";
 import { Link, Outlet } from "react-router-dom";
const PageCh20_t1 = () => {
    const dispatch = useDispatch();
     
    const books=useSelector(state=>state.book.books);
 
  const deletedBookHandler = (id) => {
    //dispatch({type:'removeBook',id:id});
    dispatch(bookActions.removeBook(id));
  };
  const addBookHandler = () => {
    let x= Math.floor(Math.random()* 1000);
    let quantity= Math.floor(Math.random()* 20)+5;
    let price= Math.floor(Math.random()* 100)* 100;
   // dispatch({type:'addBook',item:{ id: x, name: "math"+x.toString() }});
   dispatch(bookActions.addBook({ id: x, name: "math"+x.toString(),price:price,quantity:quantity }));
  };

  const updateBookHandler = (id,name) => {
    let quantity= Math.floor(Math.random()* 20)+5;
    let price= Math.floor(Math.random()* 100)* 100;
    dispatch(bookActions.updateBook({ id: id, name: name ,price:price,quantity:quantity  }));
   

  };

   
  
  return (
     <div>
        <hr />
        <h2 className="m-2">PageCh20   list book     </h2>
        <figure className="figure p-4">
         
           <button className="btn btn-info  m-2"     onClick={addBookHandler} >
             add Book randomn
           </button>
       <ul>
         {books && books.length > 0 && books.map(x => {
           return <li key={x.id} className="p-2"><strong>{x.id}</strong> {x.name} price :{x.price} quantity
 {x.quantity}            <button className="btn btn-success  m-2"   onClick={updateBookHandler.bind(null,x.id,x.name)}    >
               
          <i className="bi-pencil"></i>
           </button>

           <button className="btn btn-danger  m-2"      onClick={deletedBookHandler.bind(null,x.id)}  >
               
           <i className="bi-x-circle"></i>
           </button>
            <Link to={ "detialbook/"+x.id+"?name=yy&codexy=456"} >detial book</Link>
           </li>
         })}
       </ul>
        </figure>
        <Outlet />
      </div>
  
  );
};
export default PageCh20_t1;
