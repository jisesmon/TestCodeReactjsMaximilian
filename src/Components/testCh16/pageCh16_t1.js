import React   from 'react' ; 
import useInput from './useInput';
 import InputErrorMessage from './InputErrorMessage';
 import classes from "./Input.module.css";
const   PageCh16_t1 = ()=>{
   
   // console.log('PageCh16_t1--rerender!');
    const {
      value:userNameValue,
      isValid:userNameIsValid,
      hasError:userNameHasError,
      inputErrorMessages:userNameInputErrorMessages,
      inputBlurHandler:userNameBlurHandler,
      valueChangeHandler:userNameChangeHandler,
      reset:userNameReset
    }=useInput('',[{ type: "isRequired" }]);
 
    const {
      value:passwordValue,
      isValid:passwordIsValid,
      hasError:passwordHasError,
      inputErrorMessages:passwordInputErrorMessages,
      inputBlurHandler:passwordBlurHandler,
      valueChangeHandler:passwordChangeHandler,
      reset:passwordReset
    }=useInput('',[ { type: "isRequired" },
    { type: "isMaxLength", paramValue: 8 }]);
 
    const formSubmitHandler = (e) => {
      e.preventDefault();
      /* userName ...checkValid();
       password ...checkValid();  */
       userNameBlurHandler();
       passwordBlurHandler();
  
      console.log("--data Form--userNameIsValid, passwordIsValid", userNameIsValid , passwordIsValid);
      if (userNameIsValid && passwordIsValid ) {
        let modeldata = {userName:userNameValue,password:passwordValue};
        console.log("--data for ! Sended !--modeldata", modeldata);
      }
    };

    const formResetHandler = (e) => {
      e.preventDefault();
      /*usernameRef.current.reset();
       passwordRef.current.reset();*/
      userNameReset();
       passwordReset()
      console.log("--formResetHandler--");
    };

     return (
      <div><hr/> 
      <h2 className="m-2" >PageCh16_t1   By  ---useInput---    </h2>
         
       <from className="figure p-4" >
       <div className='control-group'>
       <div className={`form-group   ${ userNameHasError?classes.invalid  :''}` }>
          <label htmlFor="userName" className='m-2'>نام کاربری {`${userNameHasError}`}</label>
           <input type="text" id="userName"  className="form-control"
            placeholder="" 
            value={userNameValue}
            onBlur={userNameBlurHandler} 
            onChange={userNameChangeHandler} 
            
            />
          
           <InputErrorMessage   hasError={userNameHasError}  items={userNameInputErrorMessages}  />
        </div>
        <div className={`form-group  ${ passwordHasError ?classes.invalid :'' }`}>
      
          <label htmlFor="password" className='m-2'>پسورد   {passwordHasError.toString()}</label>
           <input type="password" id="password"  className="form-control" placeholder=""
            value={passwordValue}
             onBlur={passwordBlurHandler} 
             onChange={passwordChangeHandler}  
            
           />
           <InputErrorMessage   hasError={passwordHasError}  items={passwordInputErrorMessages}  />
        </div>
       </div>
       <button
          className="mx-1 mt-1 btn btn-primary"
          onClick={formSubmitHandler}
        >
          send
        </button>
        <button
          className="mx-1 mt-1 btn btn-secondary"
          onClick={formResetHandler}
        >
          Reset
        </button>
        </from>
       
      </div>
    )
     
} 
export default PageCh16_t1   
