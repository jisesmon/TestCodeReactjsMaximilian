import { useState } from "react"; 

const UseHttp = (UseHttp) => { //!!! in v16 use useCallback
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const  sendRequest =async  (requestConfig,applyData)=>{
        setLoading(true);
        setError(null); 
         const headers_golobal={"Content-Type":"application/json" };
       //1-a way is batter
        try {
         let response=  await  fetch(
         requestConfig.url,
         {
            method:requestConfig.method??"GET",
            body:requestConfig.body?JSON.stringify(requestConfig.body):null,
            headers:requestConfig.headers? {...headers_golobal , ...requestConfig.headers }:headers_golobal 
         });

         if(!response.ok){
          console.log("PageCh17_t1---UseHttp--response!",response);
           throw new Error("Request failed !");
         }
        const data= await  response.json()
         applyData(data);

        } catch (err) {
          console.log("PageCh17_t1---UseHttp--err!",err);
            setError(err.messge || "Somtng went wrong");
        }

        //aim daley for display loading   
        setTimeout(()=>{
           setLoading(false);
         },700);
    }  
     //2-a way  
      /*  fetch(
      requestConfig.url,
      {
         method:requestConfig.method??"GET",
         body:requestConfig.body?JSON.stringify(requestConfig.body):null,
         headers:requestConfig.headers? {...headers_golobal , ...requestConfig.headers }:headers_golobal 
      }).then(res=>{
        console.log("PageCh17_t1---UseHttp-- ok !",res);
         setLoading(false);
          applyData( res.json());
          }).catch(err=>{
          setLoading(false);
          console.log("PageCh17_t1---UseHttp-- error !",err);
          setError(err || "Somtng went wrong");

        });
      }*/
       
    return { loading,error,sendRequest};
}


export default UseHttp;