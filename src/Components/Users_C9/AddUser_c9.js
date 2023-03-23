import React, { useState, Fragment ,useRef } from "react";
import ErrorModelCC9 from "../UI/ErrorModel/ErrorModel_C9";
const AddUserCC9 = (props) => {

 const nameInputRef = useRef();
 const ageInputRef = useRef();
   
  const [error, setError] = useState(null);

  const onCloseHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let nameEntered= nameInputRef.current.value;
    let ageEntered= ageInputRef.current.value;
    console.log("enteredName enteredAge", nameEntered, ageEntered);
    
    if (nameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
      setError({
        title: "Invalid input  in AddUser chapter 8 ",
        message: "please enter inputs !!",
      });
      return;
    }
    if (+ageEntered < 1 || +ageEntered > 200) {
      setError({
        title: "Invalid input in AddUser chapter 8 ",
        message: "please enter   0< Age < 200 !!",
      });
      return;
    }

    props.onSave({ name: nameEntered, age: ageEntered });
     
     nameInputRef.current.value='';
     ageInputRef.current.value='';
  };

  return (
    <Fragment>
      {error && (
        <ErrorModelCC9
          title={error.title}
          message={error.message}
          onClose={onCloseHandler}
        />
      )}

      {/* needs-validation  novalidate */}
     <form
        noValidate
        className="row g-3 col-md-6 mx-auto  border border-success rounded-3"
        onSubmit={onSubmitHandler}
      >
        <div className="mb-1 ">
           <h3>AddUser</h3>
        </div>

        <div className="mb-1 text-start">
          <label htmlFor="validationCustom01" className="form-label">
             Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            ref={nameInputRef}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-1 text-start">
          <label htmlFor="validationCustom02" className="form-label">
             Age
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom02"
            ref={ageInputRef}
             
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddUserCC9;
