import React  from "react";
import { useDispatch, useSelector } from "react-redux";
//client import { cartActions } from "../store/cart-slice";
//sever  
import { actionCartAddOrUpdateItem, actionCartDelete } from "../store/cart-actions";

const Cart = () => {
    const dispatch= useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 console.log('Cart cartItems',cartItems);
  const  addItemCart=(itembook)=>{
  //!!client way
  //dispatch(cartActions.addItemToCart( {id:itembook.id} ));
  //!!server  way 
   const existCartItem = cartItems.find(x=>x.id===itembook.id);
   if(existCartItem)
     dispatch( actionCartAddOrUpdateItem({
      id: itembook.id,
      name: itembook.name,
      price: itembook.price,
      quantity: existCartItem.quantity+1,
      totalPrice: itembook.price*(existCartItem.quantity+1)
     }));
    
  } 
  const  removeItemcart=(itembook)=>{
    //!!client way
  //dispatch(cartActions.removeItemFromCart(  {id:itembook.id} ));
   //!!server  way
   const existCartItem = cartItems.find(x=>x.id===itembook.id);
   if(existCartItem)
   if(existCartItem.quantity >1)
     dispatch( actionCartAddOrUpdateItem({
      id: itembook.id,
      name: itembook.name,
      price: itembook.price,
      quantity: existCartItem.quantity-1,
      totalPrice: itembook.price*(existCartItem.quantity-1)
     }));
     else
     dispatch( actionCartDelete( itembook.id  ));

  } 
  //!!! a way to cha10_t3 dobunce(500) request  to server
  const test=(item)=>{
    //useEffect(() => {
       console.log('PageCh10_t3 useEffect--$-- CLEAN FUN',item); 
      const identitfier=setTimeout(()=>{
        
         console.log('item >>',item  );
           
          },500);
     
      //  return () => {
          //console.log('PageCh10_t3 useEffect--$-- CLEAN FUN');
          clearTimeout(identitfier);
      // }
       
    //} , [item]);
  }
  //showCart
  return (
      <div className="position-absolute p-2 bg-white box-shadow-lg border rounded  border-1 border-info">
      { cartItems && cartItems.length > 0 && (
         <div className=" p-2  ">
          <ul  >
            {cartItems.map((x) =>  {
           return   <li key={x.id} className="p-2">
                <strong>{x.id}</strong> {x.name} price : {x.price} totalPrice :{x.totalPrice} 
                <button
                  className="btn  btn-outline-info  btn-sm m-2"
                  onClick={addItemCart.bind(null, x)}
                >
                  <i className="bi-plus  "></i>
                </button>
                <strong>{x.quantity}</strong>
                <button
                  className="btn    btn-outline-info  btn-sm m-2"
                  onClick={removeItemcart.bind(null, x)}
                >
                  <i className="bi-dash  "></i>
                </button>
              </li>;
            })}
            
          </ul>
           <p> totalQuantity : { totalQuantity}</p>
            <p onClick={test.bind(null,11)}> totalPrice : { totalPrice}</p>
            </div>
        )
        
      }

      {totalQuantity === 0 && <p> you dont buy book !</p> }
     </div> 
  );
};

export default Cart;
