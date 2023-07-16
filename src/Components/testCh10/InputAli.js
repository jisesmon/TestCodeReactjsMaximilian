import React, { useImperativeHandle, useRef, useState, useEffect } from "react";
import classes from "./Input.module.css";

const InputAli = React.forwardRef((prop, ref) => {
  const isRequired = (inputValue) => inputValue !== "";
  const isMaxLength = (amont, inputValue) => {
    if (!inputValue || !amont) return false;
    if (inputValue.length > amont) return false;
    return true;
  };
  const inputRef = useRef();
  // if(prop.formInputs[prop.name] ===undefined)
  // throw new Error("name input not equle by model formInputs");
  //console.log("PageCh10_t7 inputAli --#--prop.name ,prop ", prop.name, prop);
  // console.log(
  //   "PageCh10_t7 inputAli --#--prop.name ,prop.formInputs[prop.name] ",
  //   prop.name,
  //   prop.formInputs[prop.name]
  // );
  const [inputValue, setInputValue] = useState(
    prop.formInputs[prop.name]?.value ?? ""
  );
  const [isTouch, setIsTouch] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [listErrorType, setListErrorType] = useState([]); //{type:"",paramValue:8}
  const hasError = isTouch && !isValid ? true : false;

  //console.log("inputAli --inputValue,prop ",prop.formInputs[prop.name],prop);
  const checkValid = () => {
    if (prop.validtionArray) {
      let isValidResult = true;
      prop.validtionArray.forEach((item) => {
        // console.log(  "PageCh10_t7  --2v-- checkValid   --item,listErrortype",   item, listErrorType  );

        //==========isRequired
        if (item.type === "isRequired") {
          if (!isRequired(inputValue)) {
            //prop.value
            isValidResult = false;
            //console.log(  "PageCh10_t7 InputAli  --2@@-- checkValid   isValid = false;"  );
            setListErrorType((list) => {
              if (
                list &&
                list.length > 0 &&
                list.find((n) => n.type === "isRequired") === undefined
              ) {
                return list.concat({ type: "isRequired" }); // [...list, "isRequired"];
              } else return [{ type: "isRequired" }];
            });
          } else {
            //console.log( "PageCh10_t7 InputAli  --2@@-- checkValid   isValid = true;"  );
            setListErrorType((list) => {
              if (list && list.length > 0)
                return list.filter((n) => n.type !== "isRequired");
              return list;
            });
          }
        }
        //===========isMaxLength
        if (item.type === "isMaxLength") {
          if (!isMaxLength(item.paramValue, inputValue)) {
            isValidResult = false;
            setListErrorType((list) => {
              if (list && list.length > 0) {
                if (list.find((n) => n.type === "isMaxLength") === undefined) {
                  return list.concat({
                    type: "isMaxLength",
                    paramValue: item.paramValue,
                  }); //[...list, "isMaxLength"];
                }
              } else
                return [{ type: "isMaxLength", paramValue: item.paramValue }];
            });
          } else {
            setListErrorType((list) => {
              if (list && list.length > 0)
                return list.filter((n) => n.type !== "isMaxLength");
              return list;
            });
          }
        }
      });
      //!! some valid simple email and ... must here
     /* console.log("PageCh10_t6 inputRef", inputRef);
      if (inputRef.current.validity.valid) {
        if (inputRef.current.type === "email") {
          setListErrorType((list) => {
            if (list && list.length > 0) {
              if (list.find((n) => n.type === "email") === undefined) {
                return list.concat({ type: "email" });
              }
            } else return [{ type: "email" }];
          });
        }
        else{
          setListErrorType((list) => {
            if (list && list.length > 0)
              return list.filter((n) => n.type !== "email");
            return list;
          });
        }
     }*/
     
      setIsValidInput(isValidResult);
      // console.log("PageCh10_t6 InputAli   checkValid  :: isValidResult,listErrorType", isValidResult, listErrorType);
    }
  };
  //less performance
  useEffect(() => {
    const identitfier = setTimeout(() => {
      // console.log('PageCh10_t6',inputValue);
      checkValid();
    }, 500);
    return () => {
      //console.log('PageCh10_t6 CLEAN FUN');
      clearTimeout(identitfier);
    };
  }, [inputValue]);

  const changeHandler = (e) => {
    if (!isTouch) setIsTouch(true);

    //console.log("'PageCh10_t7 inputAli --3--", e.target.value);
    if (prop.onChange) prop.onChange(e);

    setValueInput(e.target.value);

    //console.log("PageCh10_t7 inputAli --4--prop.formInputs", prop.formInputs);
  };

  const blurHandler = () => {
    if (!isTouch) setIsTouch(true);

    checkValid();

    if (prop.onBlur) prop.onBlur();
  };
  const setValueInput = (value) => {
    if (prop.setFormInputs)
      // prop.setFormInputs((data) => {
      //   return {
      //     ...data,
      //     [prop.name]: { value: value, isValid: data[prop.name].isValid },
      //   };
      // });
      prop.setFormInputs((data) => {
        return {
          ...data,
          [prop.name]: value,
        };
      });
    setInputValue(value);
  };
  const setIsValidInput = (isValid) => {
    // if (prop.setFormInputs)
    //   prop.setFormInputs((data) => {
    //     return {
    //       ...data,
    //       [prop.name]: { value: data[prop.name].value, isValid: isValid },
    //     };
    //   });
    setIsValid(isValid);
  };

  const resetHandler = () => {
    setValueInput("");
    setIsTouch(false);
  };
  const activeHandler = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      reset: resetHandler,
      focus: activeHandler,
      checkValid: blurHandler,
      isValid: isValid,
    };
  });

  return (
    //`${classes.control}  ${prop.isValid === true ? '' : classes.invalid }`
    <div className={`${classes.control}  ${hasError ? classes.invalid : ""}`}>
      <label className={classes.labelEnter} htmlFor={prop.name}>
        {prop.label}
      </label>
      <input
        ref={inputRef}
        className={classes.inputEnter}
        id={prop.name}
        name={prop.name}
        type={prop.type}
        value={inputValue}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {isTouch && listErrorType && listErrorType.length > 0 && (
        <div className={classes.messagelist}>
          {listErrorType.map((item, index) => {
            if (item.type === "isRequired")
              return (
                <p key={index} className={classes.message}>
                  please enter value ! 
                </p>
              );

            if (item.type === "isMaxLength")
              return (
                <p key={index} className={classes.message}>
                  please MaxLength is {item.paramValue} ! 
                </p>
              );

              if (item.type === "email")
              return (
                <p key={index} className={classes.message}>
                  Please enter an ! email address  ! 
                </p>
              );
              
            return "";
          })}
        </div>
      )}
    </div>
  );
});

export default InputAli;
