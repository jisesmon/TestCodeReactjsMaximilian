import React, { useState }   from 'react' ;
import Input from  './Input';

const isRequired=value=> value !== "";
 

const   PageCh10_t5 = ()=>{
   
  const [emailInput, setEmailInput] = useState('');
  const [emailIsvalid, setEmailIsvalid] = useState('');
       
    return (
      <div><hr/> 
      <h2 className="m-2" >PageCh10_t5  Input Component </h2>  
        <br/> 
        <Input 
        id='usename'
        label='نام کاربری'
        type="email"
        isValid={emailIsvalid}
        value={emailInput}
        onChange={(e)=>{setEmailInput(e.target.value)}}
        onBlur={()=>{setEmailIsvalid(isRequired(emailInput))}} 
        />
       
      </div>
    )
     
} 
export default PageCh10_t5   
