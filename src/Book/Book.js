import "./Book.css";
import BookItem from "./BookItem";

const Book = () => {
  const books =[ // :{id:number,name:String ,price:number ,dateWrite:Date ,img:string}[]
       {id:21,name:"book 1",dateWrite:new Date(2023,5, 1),img:"/assan/1.png" ,price:1000} ,
    {id:22,name:"book 2",dateWrite:new Date(2023,5, 2),img:"/assan/2.png" ,price:2000} ,
    {id:23,name:"book 3",dateWrite:new Date(2023,5, 3),img:"/assan/3.png" ,price:3000} ,
    {id:24,name:"book 4",dateWrite:new Date(2023,5, 4),img:"/assan/4.png" ,price:4000} ,
    {id:25,name:"book 5",dateWrite:new Date(2023,5, 5),img:"/assan/5.png" ,price:5000} ,
    {id:26,name:"book 6",dateWrite:new Date(2023,5, 6),img:"/assan/6.png" ,price:6000} ,
    {id:27,name:"book 7",dateWrite:new Date(2023,5, 7),img:"/assan/7.png" ,price:7000} ,
  ];

  return (
    
    <div className="row g-0">
       
       <BookItem 
         id={books[0].id} 
         name={books[0].name}  
         price={books[0].price} 
         dateWrite={ books[0].dateWrite} 
         img={books[0].img}/>

    <BookItem 
         id={books[1].id} 
         name={books[1].name}  
         price={books[1].price} 
         dateWrite={ books[1].dateWrite} 
         img={books[1].img}/>

     <BookItem 
         id={books[2].id} 
         name={books[2].name}  
         price={books[2].price} 
         dateWrite={ books[2].dateWrite} 
         img={books[2].img}/>

<BookItem 
         id={books[3].id} 
         name={books[3].name}  
         price={books[3].price} 
         dateWrite={ books[3].dateWrite} 
         img={books[3].img}/>

<BookItem 
         id={books[4].id} 
         name={books[4].name}  
         price={books[4].price} 
         dateWrite={ books[4].dateWrite} 
         img={books[4].img}/>

<BookItem 
         id={books[5].id} 
         name={books[5].name}  
         price={books[5].price} 
         dateWrite={ books[5].dateWrite} 
         img={books[5].img}/>

         <BookItem 
         id={books[6].id} 
         name={books[6].name}  
         price={books[6].price} 
         dateWrite={ books[6].dateWrite} 
         img={books[6].img}/>
    </div>

    
  );
};

export default Book;
