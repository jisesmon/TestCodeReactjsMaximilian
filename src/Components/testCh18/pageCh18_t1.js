import React from "react";
import  {useDispatch, useSelector} from "react-redux/es"; //Provider 
// import { store } from "./redux-store-t1/store"; 
const PageCh18_t1 = () => {
    const dispatch = useDispatch();
    //for test 1
    // const showCart= useSelector(state=>state.showCart);
    // const books=useSelector(state=>state.books);
    
    //a way ali for run text 1 becase storet2 load
    const showCart=useSelector(state=>state.cart.showCart);
    const books=useSelector(state=>state.book.books);

  const toggleHandler = () => {
    dispatch({type:'toggleShowCart'});
    //console.log('showCart ',showCart);
  };
  const deletedBookHandler = (id) => {
    dispatch({type:'removeBook',id:id});
  };
  const addBookHandler = () => {
    let x= Math.floor(Math.random()* 1000);
    dispatch({type:'addBook',item:{ id: x, name: "math"+x.toString() }});
  };
  //!! <Provider store={store}> must in app.js but to this section test
  return (
    // <Provider   store={store}>
      <div>
        <hr />
        <h2 className="m-2">PageCh18_t1  By   Redux  --Multiple State</h2>
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
            <button className="btn btn-success  m-2"     aria-label="Close" >
            {/* onClick={setInputsBookHandler.bind(null,x.id,x.name)}  */}
          <i className="bi-pencil"></i>
           </button>

           <button className="btn btn-danger  m-2"     aria-label="Close" onClick={deletedBookHandler.bind(null,x.id)}  >
               
           <i className="bi-x-circle"></i>
           </button></li>
         })}
       </ul>
        </figure>
      </div>
    // </Provider>
  );
};
export default PageCh18_t1;
