import React, { useEffect,useState }  from 'react' ;

const   PageCh10_t3 = ()=>{
      const [inputname, setInputname] = useState('');
      const [Outinputname, setOutInputname] = useState('');
     //console.log('PageCh10_t2 useEffect--setTimeout--',inputname);
    useEffect(() => {
     
      const identitfier=setTimeout(()=>{
         //console.log('PageCh10_t3 useEffect--dobunce!!--#--out==>>',inputname);
         setOutInputname(inputname +" --- "+ new Date().getMilliseconds() );
          },500);
     
        return () => {
          //console.log('PageCh10_t3 useEffect--$-- CLEAN FUN');
          clearTimeout(identitfier);
       }
       }
     , [inputname]);// inputname
       
    return (
      <div><hr/> 
      <h2 className="m-2" >PageCh10_t3 useEffect setTimeout  dobunce(500) !!</h2>  
        <br/><h3>OutInputname : {Outinputname}</h3>
        <input   type="text"  className="form-control" 
         onChange={(e)=>{setInputname(e.target.value)}} /> 
      </div>
    )
     
} 
export default  PageCh10_t3 
