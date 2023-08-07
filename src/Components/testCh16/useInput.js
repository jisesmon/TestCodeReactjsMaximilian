import { useState } from "react";
import { useReducer , useEffect} from "react";
const inputStateReducer=(state,action)=>{
   if(action.type==='INPUT'){
    return {value:action.value,isTouched:state.isTouched}
   }
   if(action.type==='BLUR' && state.isTouched===false){
    return {value:state.value,isTouched:true}
   }
   if(action.type==='RESET'){
     return {value:'',isTouched:false}
   }
   return  state;
}

const ErrorMessagesStateReducer=(state,action)=>{
  if(action.type==='ADD'){
  
      if (
        state &&
        state.length > 0 &&
        state.find((n) => n.type ===action.value.type ) === undefined
      ) {
        return state.concat(action.value); //  
      } else return [action.value];
    
 }
  if(action.type==='REMOVE'){

    if (state && state.length > 0)
    return state.filter((n) => n.type !== action.value.type);
  
  }
  
  return  state;
}
const useInput = (valueInitial,validtionArray) => {

    const isRequired = (inputValue) => inputValue !== "";
    const isMaxLength = (amont, inputValue) => {
      if (!inputValue || !amont) return false;
      if (inputValue.length > amont) return false;
      return true;
    };
    
     const [inputState, dispatchInutState] = useReducer(inputStateReducer, {value:valueInitial?valueInitial:'',isTouched:false}) ;
     const [inputErrorMessages, dispatchErrorMessagesState] = useReducer(ErrorMessagesStateReducer, []) //{type:"",paramValue:8}
     const [inputIsValid, setInputIsValid] = useState(true);
     const checkValid = () => {
      setInputIsValid(true);
      if (validtionArray) {
        
         validtionArray.forEach((item) => {
          // console.log(  "PageCh16_t1  --2v-- checkValid   --item,inputErrorMessages",   item, inputErrorMessages  );
  
          //==========isRequired
          if (item.type === "isRequired") {
            if (!isRequired(inputState.value)) {
              //prop.value
              //isValidResult.isValid=false;
              setInputIsValid(false);
                dispatchErrorMessagesState({type:'ADD',value:{ type: "isRequired" }});
            } else {
               dispatchErrorMessagesState({type:'REMOVE',value:{ type: "isRequired" }});
            }
          }
          //===========isMaxLength
          if (item.type === "isMaxLength") {
            if (!isMaxLength(item.paramValue, inputState.value)) {
             // isValidResult.isValid=false;
             setInputIsValid(false);
              dispatchErrorMessagesState({type:'ADD',value:{ type: "isMaxLength", paramValue: item.paramValue }});
            } else {
                dispatchErrorMessagesState({type:'REMOVE',value:{ type: "isMaxLength" }});
            }
          }
          //===========...others error type...

        });
         // console.log("PageCh10_t6 useInput   checkValid  :: isValidResult,inputErrorMessages", isValidResult, inputErrorMessages);

      } 
     }

       //less performance
  useEffect(() => {
    const identitfier = setTimeout(() => {
       // console.log('PageCh16_t1   inputState',inputState);
      checkValid();
    }, 500);
    return () => {
      //console.log('PageCh10_t6 CLEAN FUN');
      clearTimeout(identitfier);
    };
  }, [inputState.value]);
//!isValidResult.isValid 
      const hasError=(!inputIsValid) && inputState.isTouched; 
     // console.log('PageCh16_t1 useInput   hasError,inputIsValid,inputState.isTouched',hasError,inputIsValid,inputState.isTouched);
      const valueChangeHandler=(e)=>{
        dispatchInutState({type:'INPUT',value:e.target.value});
      }
      const inputBlurHandler=()=>{
        checkValid();
       // console.log("PageCh10_t6 useInput   checkValid  :: isValidResult,inputErrorMessages", isValidResult, inputErrorMessages);
        dispatchInutState({type:'BLUR'});
      }
      const reset=()=>{
        dispatchInutState({type:'RESET'});
      }

    return {
        value:inputState.value,
        isValid:inputIsValid,
        hasError:hasError,
        inputErrorMessages,
        valueChangeHandler,
        inputBlurHandler,
        reset,

    };
}

export default useInput;