import React,  {useCallback, useState }  from 'react' ;
import useCouter from './useCouter';
 
const   PageCh15_t1 = ()=>{
   
   // console.log('PageCh15_t1--rerender!');
   const ForWards= useCouter();
   const BackWards= useCouter(false);
 
  
     return (
      <div><hr/> 
      <h2 className="m-2" >PageCh15_t1   Configuring Custom Hooks  --useCouter   </h2>
      <div className="card" style={ {width:'10rem'}} >
        <div className="card-body">
          <h5 className="card-title">ForWards useCouter : {ForWards}</h5>
          
        </div>
      </div>
      <div className="card" style={ {width:'10rem'}}>
        <div className="card-body">
          <h5 className="card-title">BackWards useCouter : {BackWards}</h5>
          
        </div>
      </div>
      </div>
    )
     
} 
export default PageCh15_t1   
