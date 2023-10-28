 
import React   from 'react' ;  
const   SiteMain = (props)=>{
   return (
   
     <div className="row App">
      <h4>Site Main</h4>
        {props.children}
      </div> 
   )
    
} 
export default SiteMain