import React from "react";
import  { useDispatch, useSelector} from "react-redux";  
 import { cartActions } from "./store/cart-slice";
 import { bookActions } from "./store/book-slice";
const PageCh19_t1 = () => {
    const dispatch = useDispatch();
    
    const showCart=useSelector(state=>state.cart.showCart);
    const books=useSelector(state=>state.book.books);
  // const toggleHandler = () => {
  //  // dispatch({type:'toggleShowCart'});
  //   //console.log('showCart ',showCart);
  //   dispatch(cartActions.toggleShowCart())
  // };
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

  const  addCartHandler= (book) => {
    //let item = books.find(x=>x.id===id);
        if(book.quantity >0){
               dispatch(cartActions.addItemToCart({ id: book.id, name: book.name,price:book.price,quantity:1 }));
               dispatch(bookActions.updateQuantity({id:book.id,requestQuantity:1}));
        }
    
  };
  
  return (
     <div>
        <hr />
        <h2 className="m-2">PageCh19_t1  ( without server that data)(client way)  </h2>
        <figure className="figure p-4">
        <p>   show Cart for top Page:{showCart.toString()}</p>
          {/* <button  className="btn btn-primary btn-sm m-2"
            onClick={toggleHandler} > toggle Show Cart
          </button> */}
          <h3>   please buy book ! </h3>
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
           <button className="btn btn-info  m-2"      onClick={addCartHandler.bind(null,x)}  >
               
               <i className="bi-cart"></i>
               </button>
           </li>
         })}
       </ul>
        </figure>
      </div>
  
  );
};
export default PageCh19_t1;
