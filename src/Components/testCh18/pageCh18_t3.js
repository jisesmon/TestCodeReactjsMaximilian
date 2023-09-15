  
 import { cartActions } from "./reduxjs-toolkit-store-t2/cartSlice";
 import { bookActions } from "./reduxjs-toolkit-store-t2/bookSlice";
 import { connect } from "react-redux";
 import React ,{ Component  } from 'react'
 
 class PageCh18_t3 extends  Component {
   
    toggleHandler = () => {
    // dispatch({type:'toggleShowCart'});
     //console.log('showCart ',showCart);
     //dispatch(cartActions.toggleShowCart())
     this.props.toggleShowCart();
   };
     deletedBookHandler = (id) => {
     //dispatch({type:'removeBook',id:id});
    // dispatch(bookActions.removeBook(id));
    this.props.removeBook(id);
   };
     addBookHandler = () => {
     let x= Math.floor(Math.random()* 1000);
    // dispatch({type:'addBook',item:{ id: x, name: "math"+x.toString() }});
   // dispatch(bookActions.addBook({ id: x, name: "math"+x.toString() }));
   this.props.addBook({ id: x, name: "math=="+x.toString() });
   };
 
     updateBookHandler = (id,name) => {
     let x= Math.floor(Math.random()* 1000);
    // dispatch(bookActions.updateBook({ id: id, name: "math-"+x.toString() }));
    this.props.updateBook({ id: id, name: "math##"+x.toString() });
   };
  render() {
    return (
      // <Provider   store={store}>
        <div>
          <hr />
          <h2 className="m-2">PageCh18_t3 By  @reduxjs-toolkit   --Multiple State in class-based</h2>
          <figure className="figure p-4">
            <p>State showCart :{this.props.showCart.toString()}</p>
            <button  className="btn btn-primary btn-sm m-2"
              onClick={this.toggleHandler} > toggle Show Cart
            </button>
            <h3>State books  </h3>
             <button className="btn btn-info  m-2"     onClick={this.addBookHandler} >
               add Book randomn
             </button>
         <ul>
           {this.props.books && this.props.books.length > 0 && this.props.books.map(x => {
             return <li key={x.id} className="p-2"><strong>{x.id}</strong> {x.name} 
              <button className="btn btn-success  m-2"   onClick={this.updateBookHandler.bind(null,x.id,x.name)}    >
                 
            <i className="bi-pencil"></i>
             </button>
  
             <button className="btn btn-danger  m-2"      onClick={this.deletedBookHandler.bind(null,x.id)}  >
                 
             <i className="bi-x-circle"></i>
             </button></li>
           })}
         </ul>
          </figure>
        </div>
      // </Provider>
    );
  }
 }
 const mapStateToProps=state=>{
 return {
  showCart:state.cart.showCart, 
  books:state.book.books
  }}
  const mapDispatchToProps=dispatch=>{
    return {
      toggleShowCart:()=>dispatch(cartActions.toggleShowCart()), 
      addBook:(item)=>dispatch(bookActions.addBook(item)),
      removeBook:(id)=>dispatch(bookActions.removeBook(id)),
      updateBook:(item)=> dispatch(bookActions.updateBook(item)),
     }}
 export default connect(mapStateToProps,mapDispatchToProps)(PageCh18_t3);
 
 
