import { useState } from "react"; 

const UseHttp = (UseHttp) => { //!!! in v16 use useCallback
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const sendRequest=async (requestConfig,applyData)=>{
        setLoading(true);
        setError(null);
        try {
            
        const headers_golobal={"Content-Type":"application/json"};
        
       let response=  await  fetch(
         requestConfig.url,
         {
            method:requestConfig.method??"GET",
            body:requestConfig.body?JSON.stringify(requestConfig.body):null,
            headers:requestConfig.headers? {...headers_golobal , ...requestConfig.headers }:headers_golobal 
         });

         if(!response.ok){
          console.log("PageCh15_t2---UseHttp--response!",response);
           throw new Error("Request failed !");
         }
        const data= await  response.json()
         applyData(data);

        } catch (err) {
          console.log("PageCh15_t2---UseHttp--err!",err);
            setError(err.messge || "Somtng went wrong");
        }

        //aim daley for display loading   
        setTimeout(()=>{
           setLoading(false);
         },700);
    }
    return { loading,error,sendRequest};
}

export default UseHttp;