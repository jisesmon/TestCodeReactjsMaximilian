import './NewBook.css'; 
import BookForm from './BookForm'; 
const NewBook=(props) => {

    const onSaveNewBook=(NewBookData)=>{
        NewBookData.id=Math.random().toString();
        props.onSaveBook(NewBookData);
    }
     
  return (
    <div className=" col-xs-12 col-sm-6 m-auto p-3">
     <BookForm  onSaveNewBook={onSaveNewBook }/>
    </div>
    
  );
}

export default NewBook;