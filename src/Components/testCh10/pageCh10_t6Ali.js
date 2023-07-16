import React, { useState, useRef } from "react";
import InputAli from "./InputAli";

// const isRequired=value=> value !== "";
// const isMaxLength=(amont,value)=>{
//   if(!value || !amont )return false;
//    if(value.length > amont)
//    return false;
//    return true;
// }
const PageCh10_t6Ali = () => {
  const [formInputs, setFormInputs] = useState({
    username: "alioooo",
    password: "",
  });

  const usernameRef = useRef();
  const passwordRef = useRef();
  const listInputRef = [usernameRef, passwordRef];

  const funCheckValidInputs = (ar) => {
    ar.forEach((item) => {
      item.current.checkValid();
    });
  };

  const funResetInputs = (ar) => {
    ar.forEach((item) => {
      item.current.reset();
    });
  };

  const funIsValidForm = (ar) => {
    let isValidResult = true;
    ar.forEach((item) => {
      if (!item.current.isValid) isValidResult = false;
    });
    return isValidResult;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    /* usernameRef.current.checkValid();
     passwordRef.current.checkValid();*/
    funCheckValidInputs(listInputRef);

    console.log("--data Form--formInputs", formInputs);
    if (
      // usernameRef.current.isValid &&
      // passwordRef.current.isValid
      funIsValidForm(listInputRef)
    ) {
      let modeldata = formInputs;
      console.log("--data for ! Sended !--modeldata", modeldata);
    }
  };
  const formResetHandler = (e) => {
    e.preventDefault();
    /*usernameRef.current.reset();
     passwordRef.current.reset();*/
    funResetInputs(listInputRef);

    console.log("--formResetHandler--", formInputs);
  };
  const focuspasswordHandler = (e) => {
    e.preventDefault();
    //usernameRef.current.focus();
    //     usernameRef.current.addClass("uuu");
    passwordRef.current.focus();
    console.log("--focuspasswordHandler--", passwordRef.current, formInputs);
  };

  return (
    <div>
      <hr />
      <h2 className="m-2">
        PageCh10_t6Ali @ --inputAli-- Component @ -- React.forwardRef ref
        useImperativeHandle{" "}
      </h2>
      <br />
      <form noValidate>
        <InputAli
          ref={usernameRef}
          name="username"
          label="نام کاربری"
          type="email"
          formInputs={formInputs}
          setFormInputs={setFormInputs}
          //onChange?={(e)=>{setEmailInput(e.target.value)}}
          //? onBlur={()=>{setEmailIsvalid(isRequired(emailInput))}}
          validtionArray={[
            { type: "isRequired" },
            { type: "isMaxLength", paramValue: 8 },
          ]} //???,isMaxLength(20)
          //[isRequired,isMaxLength(20)]
        />
        <InputAli
          ref={passwordRef}
          name="password"
          label="کلمه عبور "
          type="password"
          formInputs={formInputs}
          setFormInputs={setFormInputs}
          validtionArray={[{ type: "isRequired" }]} //???,isMaxLength(20)
        />
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
        <button
          className="mx-1 mt-1 btn btn-info"
          onClick={focuspasswordHandler}
        >
          focuspassword
        </button>
      </form>
    </div>
  );
};
export default PageCh10_t6Ali;
