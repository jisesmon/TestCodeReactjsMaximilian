import './bookItem.css';
import BookDate from './BookDate';
import Card from '../UI/Card/Card';
const BookItem=(props) => {
  return (
    <div className=" col-xs-12 col-sm-6 col-md-4">
    <div className="bookItem ">
       <Card >
        <img className="bookItem-img" src={props.img}  alt={props.name}/> 
         </Card>
     
      <p className="bookItem-name" >Name : {props.name}</p>
      <p  className="bookItem-price"  >price :{props.price}</p>
      <BookDate className="bookItem-dateWrite" dateWrite={props.dateWrite} />  
      <p className="bookItem-id" >id : {props.id}</p>
    </div>
    </div>
    
  );
}

export default BookItem;