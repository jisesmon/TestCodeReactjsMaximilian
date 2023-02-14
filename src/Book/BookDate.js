import './BookDate.css';

const BookDate=(props)=>{
    //new Date().getDay() .toISOString('en-us',)
    const day =props.dateWrite?.getDay() || '' ;
    const Month =props.dateWrite?.getMonth() || '' ;
    const Year =props.dateWrite?.getFullYear() || '' ;
return (
  <div className="BookDate">
    <div className="BookDate-day">{day}</div>
    <div className="BookDate-Month">{Month}</div>
    <div className="BookDate-Year">{Year}</div>
   </div>

)
}

export default BookDate;