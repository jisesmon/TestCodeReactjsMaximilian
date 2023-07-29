import React from "react";
import UseHttp from "./UseHttp";
import { useState } from "react";

const PageCh15_t2 = () => {
  //!! npx json-server --port 8000 --watch db.json
  console.log("PageCh15_t2--rerender!");
  const { error, loading, sendRequest } = UseHttp();
  const [idbook, setIdbook] = useState(0);
  const [nameBook, setNameBook] = useState("");

  const [ books, setBooks] = useState("");

  const getRequestHandler = () => {
    console.log("PageCh15_t2--getRequestHandler!");
    sendRequest(
      {
        url: "http://localhost:8000/books",
      },
      getAllbookHandler
    );
  };

  const getAllbookHandler = (items) => {
    console.log("PageCh15_t2--getAllbookHandler!  books:", items);
    setBooks(items);
  };

  const postBookHandler = () => {
    console.log("PageCh15_t2--postBookHandler!");
    sendRequest(
      {
        url: "http://localhost:8000/books",
        method: "post",
        body: { id: idbook, name: nameBook },
      },
     getRequestHandler
    
    );
    
  };

  const setInputsBookHandler = (id,name) => {
    console.log("PageCh15_t2--setInputsBookHandler!");
    setIdbook(id);
    setNameBook(name);
  };
  const putBookHandler = () => {
    console.log("PageCh15_t2--postBookHandler!");
    sendRequest(
      {
        url: "http://localhost:8000/books/"+idbook,
        method: "PUT",
        body: { name: nameBook },  //id: idbook, 
      },
      getRequestHandler
    );
    
  };

  const deletedBookHandler = (id) => {
    console.log("PageCh15_t2--deletedBookHandler!");
    sendRequest(
      {
        url: "http://localhost:8000/books/"+id.toString(),
        method: "DELETE",
       },  //(e)=>{}
       getRequestHandler
       
       );
    
  };
  return (
    <div>
      <hr />
      <h2 className="m-2">PageCh15_t2 Custom Hooks --useHttp  -- npx json-server --port 8000 --watch db.json</h2>
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
             <button className="btn btn-success  m-2"     aria-label="Close" onClick={setInputsBookHandler.bind(null,x.id,x.name)} >
           <i className="bi-pencil"></i>
            </button>

            <button className="btn btn-danger  m-2"     aria-label="Close" onClick={deletedBookHandler.bind(null,x.id)} >
            <i className="bi-x-circle"></i>
            </button></li>;
          })}
        </ul>
        <figcaption className="figure-caption">
          get Request All Books.
        </figcaption>
      </figure> 
      <figure className="figure p-4">
        <input className=" form-control m-2"
          type="text"
          value={idbook}
          onChange={(e) => {
            setIdbook(e.target.value);
          }}
        />
        <input className=" form-control m-2"
          type="text"
          value={nameBook}
          onChange={(e) => {
            setNameBook(e.target.value);
          }}
        />
        <button className="btn btn-primary btn-sm m-2" onClick={postBookHandler}>
           add Book 
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={putBookHandler}>
        Update Book 
        </button>
        <figcaption className="figure-caption">
          Add / Update Book.
        </figcaption>
      </figure>
    </div>
  );
};
export default PageCh15_t2;
