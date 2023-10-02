 
import React   from 'react' ;
import  { useDispatch, useSelector} from "react-redux";
import { cartActions } from "./store/cart-slice";  
import PageCh19_t1 from './pageCh19_t1';
import PageCh19_t2 from './pageCh19_t2';
import Cart from './Components/Cart';
const   PageCh19 = ()=>{
  const dispatch = useDispatch();
    
  const showCart=useSelector(state=>state.cart.showCart); 
  const totalQuantity=useSelector(state=>state.cart.totalQuantity); 
  
  const  toggleShowCartHandler=()=>{
    dispatch(cartActions.toggleShowCart());
  } 
   
    return (
      <>  <hr/> 
      <h1 className="m-2" >PageCh19 --- chapter 19  Advanced Redux  </h1>
        
     <div className=' position-relative'>
     <button className='btn btn-outline-success rounded   ' onClick={toggleShowCartHandler}><i className="bi-cart  " > </i>{ totalQuantity}
        </button>  
      { showCart && <Cart />   }
      </div>

        <PageCh19_t1 />   
        <PageCh19_t2 />      
      </>
    )
     
} 
export default PageCh19
