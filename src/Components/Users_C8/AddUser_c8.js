import React ,{useState}from 'react'
import ErrorModelCC8 from '../UI/ErrorModel/ErrorModel_C8';
  const  AddUserCC8 =(props)=> {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null)
    
    const onCloseHandler=()=>{
      setError( null);
    }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log('enteredName enteredAge',enteredName , enteredAge);
    if(enteredName.trim().length===0 || enteredAge.trim().length===0  ){
      setError({
        title:"Invalid input  in AddUser chapter 8 ",
        message : "please enter inputs !!"
      });
      return;
    }
    if(+enteredAge < 1 || +enteredAge >200){
      setError({
        title:"Invalid input in AddUser chapter 8 ",
        message : "please enter   0< Age < 200 !!"
      });
      return;
    }
     

    props.onSave({name:enteredName ,age:enteredAge});
     setEnteredName('');
     setEnteredAge('');

  }

  return (
    //???
     <>
     { error &&
      <ErrorModelCC8 title={error.title} message={error.message} onClose={onCloseHandler}/>
      }

      {/* needs-validation  novalidate */}

   <form  noValidate className="row g-3 col-md-6 mx-auto  border border-success rounded-3"  onSubmit={onSubmitHandler}>
   
   <div className="mb-1 ">  <h3>AddUser</h3></div>
   

  <div className="mb-1 text-start">
    <label  htmlFor="validationCustom01" className="form-label"> Name</label>
    <input type="text" className="form-control" id="validationCustom01"  
    onChange={(e)=>{setEnteredName(e.target.value)}}
    value={enteredName}
    required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="mb-1 text-start">
    <label htmlFor="validationCustom02" className="form-label">  Age</label>
    <input type="number" className="form-control" id="validationCustom02" 
     onChange={(e)=>{setEnteredAge(e.target.value)}}
     value={enteredAge}
    required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
      </form>
      </>
    )
  
}

export default AddUserCC8