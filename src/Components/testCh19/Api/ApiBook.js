import http from '../Libs/http-common';
 
export  const  apiBookGetAll = async ( )=>{
return await http.get('http://localhost:8000/books').then(x=>{ return x;});
 };
 export  const  apiBookAdd =async  ( bookItem)=>{
    return await http.post('http://localhost:8000/books',bookItem);
     };
 export  const  apiBookUpdate = async ( bookItem)=>{
    return await http.put('http://localhost:8000/bookss/'+bookItem.id,bookItem);
  };
  export  const  apiBookDelete = async ( idbook)=>{
    return await http.delete('http://localhost:8000/books/'+idbook);
  };