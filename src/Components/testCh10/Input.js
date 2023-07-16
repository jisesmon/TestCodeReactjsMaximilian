import React  from 'react'
 import classes from './Input.module.css';

  const Input =(prop) =>  {
  
    return (
       <div className={ `${classes.control}  ${prop.isValid === true ? '' : classes.invalid }`} >
        <label htmlFor={prop.id}  >{prop.label}</label>
        <input id={prop.id}
        name={prop.name}
        type={prop.type} 
        value={prop.value}
        onChange={prop.onChange}
        onBlur={prop.onBlur} 
         />
      </div>
    )
  }
 

export default Input
