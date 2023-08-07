import React   from 'react' ; 
 import classes from "./Input.module.css";
const   InputErrorMessage = (props)=>{
 // console.log('PageCh16_t1--InputErrorMessage--props',props);
     return (
      <> 
      {props.hasError && props.items && props.items.length > 0 && (
        <div className={classes.messagelist}>
          {props.items.map((item, index) => {
            if (item.type === "isRequired")
              return (
                <p key={index} className={classes.message}>
                  please enter value ! 
                </p>
              );

            if (item.type === "isMaxLength")
              return (
                <p key={index} className={classes.message}>
                  please MaxLength is {item.paramValhue} ! 
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
      </>
    )
     
} 
export default InputErrorMessage
