import React, { useEffect,useState }  from 'react' ;

const   PageCh12_tButton = (props)=>{
  console.log('PageCh12_tButton--rerender!');
     return (
      <button onClick={props.onClick}>
        {props.children}
      </button>
    )
     
} 
export default PageCh12_tButton   
