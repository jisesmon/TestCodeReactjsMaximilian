import React ,{useState}   from 'react' ; 
 import UseHttp from './UseHttp';
const   PageCh17_t1 = ()=>{
   
   // console.log('PageCh17_t1--rerender!');
   const { error, loading, sendRequest } = UseHttp();  
 
   const [ books, setBooks] = useState([]);
 
   const getRequestHandler = () => {
     console.log("PageCh17_t1--getRequestHandler!");
     sendRequest(
       {
         url: "http://localhost:8000/books"
         //,method:"post"
       },
        res=>{
          console.log('getRequestHandler res',res); 
           
          setBooks(res);
        }
     );
   };
 
  
     return (
      <div><hr/> 
      <h2 className="m-2" >PageCh17_t1   HANDLER fetch  fun async await then catch    </h2>
      <figure className="figure p-4">
     
     <div className="alert alert-danger" role="alert">
       <strong>error </strong>{ JSON.stringify(error)  }
     </div>
      {loading && 
        <> <div className="spinner-border" role="status">
       
         </div><span className="visually-hidden">Loading...</span>
         </>
       }
       
       <button className="btn btn-primary btn-sm m-2" onClick={getRequestHandler}>
         
         get requset
       </button>
        <h3> book list</h3>
       <ul>
         {books && books.length > 0 && books.map(x => {
           return <li key={x.id} className="p-2"><strong>{x.id}</strong> {x.name} 
            <button className="btn btn-success  m-2"     aria-label="Close" >
            {/* onClick={setInputsBookHandler.bind(null,x.id,x.name)}  */}
          <i className="bi-pencil"></i>
           </button>

           <button className="btn btn-danger  m-2"     aria-label="Close"  >
            {/* onClick={deletedBookHandler.bind(null,x.id)} */}
           <i className="bi-x-circle"></i>
           </button></li>;
         })}
       </ul>
       <figcaption className="figure-caption">
         get Request All Books.
       </figcaption>
     </figure> 
       
      </div>
    )
     
} 
export default PageCh17_t1   
