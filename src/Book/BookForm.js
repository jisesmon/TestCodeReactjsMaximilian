import React ,{useState} from 'react';
import './BookForm.css'; 
import Card from '../UI/Card/Card';
const BookForm=(props) => {
   //1-way const [name, setName] = useState('');
   //2 ,3  way
   const [userInput,setUserInput]=useState({id:0 ,img:'',name:'',price:0,dateWrite:new Date(Date.now)});

  
  const nameHandler= (val)=>{
     console.log('nameHandler val',val.target.value);
     //1-way setName(val.target.value);
     //2-way  is   lose data
      //setUserInput( {...userInput,name:val.target.value});
     //3-way is not lose data
     setUserInput(perState=>{
        return {...perState,name:val.target.value}
     })
  }
    const imgHandler= (val)=>{
    console.log('imgHandler val',val.target.value);
    setUserInput(perState=>{
        return {...perState,img:val.target.value}
    })
  }
  const priceHandler= (val)=>{
    console.log('priceHandler val',val.target.value);
    setUserInput(perState=>{
        return {...perState,price: val.target.value}
    })
  }

  const dateWriteHandler= (val)=>{
    console.log('dateWriteHandler val',val.target.value);
    setUserInput(perState=>{
        return {...perState,dateWrite:new Date(val.target.value)}
    })
  }
  
  

  const onSave= (event)=>{
    event.preventDefault();
    console.log('BookForm onSave  ',userInput);

  const EnteruserInput=userInput;
   props.onSaveNewBook(EnteruserInput); 

    setUserInput({id:0 ,img:'',name:'',price:0,dateWrite:EnteruserInput.dateWrite});
  }



  return (
    <div className="BookForm border border-1 border-info p-3 rounded-3  ">
      <Card>
        <img className="BookForm-img" src={props.img} alt="" />
      </Card>

      <form onSubmit={onSave}>
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            img
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control"
             value={userInput.img}
              onChange={imgHandler} />
          </div>
        </div>

        <div className="row mb-3">
          <label   className="col-sm-2 col-form-label">
            name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" 
            value={userInput.name}
              onChange={nameHandler}  />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">price</label>
          <div className="col-sm-10">
            <input
              type="number"
              min={0}
              className="form-control" 
               value={userInput.price}
              onChange={priceHandler} 
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">dateWrite</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" 
            
            
            onChange={dateWriteHandler}  />

{/* value={userInput.dateWrite} */}

          </div>
        </div>

        {/* <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div> */}
        <button type="submit" className="btn btn-primary">
          ok
        </button>
      </form>
    </div>
  );
}

export default BookForm