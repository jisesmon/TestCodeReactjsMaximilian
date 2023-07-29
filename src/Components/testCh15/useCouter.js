import { useState ,useEffect} from "react";

 
const useCouter = (forwards=true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval=setInterval(()=>{
    if(forwards)
    setCounter(prv=>prv+1);
    else
    setCounter(prv=>prv-1);
   },1000)
    return () => {
        clearInterval(interval);
    };
  }, [forwards]);
    return counter;
}

export default useCouter;