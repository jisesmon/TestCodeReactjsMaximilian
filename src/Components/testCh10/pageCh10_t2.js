import React, { useEffect,useState }  from 'react' ;

const   PageCh10_t2 = ()=>{
      const [counter, setCounter] = useState(0);
      const [EnableCounter, setEnableCounter] = useState(false);
     //console.log('PageCh10_t2 useEffect--setInterval--',counter);
    useEffect(() => {
     if(EnableCounter){
      const identitfier=setInterval(()=>{
          setCounter(prv=> { 
        // console.log('PageCh10_t2 useEffect--#--',prv);
        return prv +1;});

      },1000);
     
        return () => {
          //console.log('PageCh10_t2 useEffect--$-- CLEAN FUN');
          clearInterval(identitfier);
       }
       }
    }, [EnableCounter]);// inputname
       
    return (
      <div><hr/> 
      <h2 className="m-2" >PageCh10_t2 useEffect setInterval timer counter </h2>  
        <br/><h3>counter : {counter}</h3>
        <button className='btn btn-primary' 
        onClick={()=>{  setEnableCounter(prv=> { return !prv})}}  >Enable/disable Counter </button>
      </div>
    )
     
} 
export default  PageCh10_t2 
