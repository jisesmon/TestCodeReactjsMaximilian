import http from '../Libs/http-common';
 
export  const  apiCartGetAll = async  ( )=>{
return await  http.get('http://localhost:8000/carts');
 };
 //but json server local 
 export  const  apiCartAdd =async  ( cartItem)=>{
    return await http.post('http://localhost:8000/carts',cartItem);
     };
 export  const  apiCartUpdate = async ( cartItem)=>{
    return await http.put('http://localhost:8000/carts/'+cartItem.id,cartItem);
  };
  export  const  apiCartDelete = async ( idCart)=>{
    return  http.delete('http://localhost:8000/carts/'+idCart);
  }; 
  //!!! aim  cartAdd  cartUpdate  cartDelete  in main server  but json server local top funcs 
  export  const  apiCartAddOrUpdateItem = async ( cartItem)=>{
    return await http.put('http://localhost:8000/Carts/'+cartItem.id,cartItem);
  };