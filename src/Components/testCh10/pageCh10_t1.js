import React, { useEffect,useState }  from 'react' ;

const   PageCh10_t1 = ()=>{
     const [inputname, setInputname] = useState('');
     const [counter, setCounter] = useState(-1);
     console.log('PageCh10_t1 useEffect--',counter);
    useEffect(() => {
      
      setCounter(prv=> { 
         console.log('PageCh10_t1 useEffect--#--',prv);
        return prv +1;});
    //   return () => {
    //     second
    //   }
    }, [inputname]);// inputname
       
    return (
      <div><hr/> 
      <h2 className="m-2" >PageCh10_t1  useEffect </h2>  
        <br/><h3>counter : {counter}</h3>
       <input   type="text"  className="form-control" 
         onChange={(e)=>{setInputname(e.target.value)}} /> 
      </div>
    )
     
} 
export default PageCh10_t1   
