import React, { useState } from "react";
import "./Book.css";
import BookItem from "./BookItem";
import NewBook from "./NewBook";
import BookFilter from "./BookFilter";
import BookChart from './BookChart';

const DUMMY_BOOKS = [
  // :{id:number,name:String ,price:number ,dateWrite:Date ,img:string}[]
  {
    id: 21,
    name: "book 1",
    dateWrite: new Date('2023/ 5/1'),
    img: "/assets/BookImgs/1.png",
    price: 1000,
  },
  {
    id: 22,
    name: "book 2",
    dateWrite: new Date('2020/ 5/2'),
    img: "/assets/BookImgs/2.png",
    price: 2000,
  },
  {
    id: 23,
    name: "book 3",
    dateWrite: new Date('2023/ 5/3'),
    img: "/assets/BookImgs/3.png",
    price: 1600,
  },
  {
    id: 24,
    name: "book 4",
    dateWrite: new Date('2022/ 5/4'),
    img: "/assets/BookImgs/4.png",
    price: 400,
  },
  {
    id: 25,
    name: "book 5",
    dateWrite: new Date('2023/ 5/1'),
    img: "/assets/BookImgs/5.png",
    price: 1700,
  },
  {
    id: 26,
    name: "book 6",
    dateWrite: new Date(2023, 5, 6),
    img: "/assets/BookImgs/6.png",
    price: 800,
  },
  {
    id: 27,
    name: "book 7",
    dateWrite: new Date('2010/5/7'),
    img: "/assets/BookImgs/7.png",
    price: 1400,
  },
];

const Book = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS)

  const SaveBook = (NewBookData) => {
    console.log("Book  SaveBook  ", NewBookData);
    setBooks(preStateBook=>{
    return  [NewBookData, ...preStateBook]
    })
  };

  const [filterYear, setFilterYear] = useState('2023');

  const ChangeFilterHandler = (datafilter) => {
    console.log("Book  ChangeFilterHandler  ", datafilter);
    setFilterYear(datafilter); 
  };


  const filteredBooks =
    filterYear === '' ?
      books
      :
      books.filter( x  =>   x.dateWrite.getFullYear().toString() === filterYear);
    


  return (
    <div className="row g-0">
      <div className="row">
        <NewBook onSaveBook={SaveBook} />
      </div>
      <div className="row">
        <div className=" border border-1 border-info p-3 rounded-3">
          
          <BookFilter
            selected={filterYear}
            onChangeFilter={ChangeFilterHandler}
          />

        </div>
      </div>

      <div>
      <div className=" border border-1 border-info p-3 rounded-3">
          
         <BookChart  dataBook={filteredBooks}/> 

        </div>
     
      </div>
      {
        filteredBooks.length ===0 &&
         <div className=" alert alert-warn" role="alert">
             not Books found by <strong> Year {filterYear}</strong>
        </div>  
      }

      {filteredBooks.length >0 &&
       filteredBooks.map(item=> 
        ( 
        <BookItem
          key={item.id}
         id={item.id}
         name={item.name}
         price={item.price}
         dateWrite={item.dateWrite}
         img={item.img}
       /> 
      ))}
      {/* <BookItem
        id={books[0].id}
        name={books[0].name}
        price={books[0].price}
        dateWrite={books[0].dateWrite}
        img={books[0].img}
      /> */}

       
    </div>
  );
};

export default Book;
