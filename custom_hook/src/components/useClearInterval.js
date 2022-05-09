
import {useCallback,useRef,useEffect,useState} from 'react';

function useClearInterval(callback,delay) {
    const [isrunning,setIsrunning]=useState(false)
   
    const callbackRef=useRef(callback);
    const clearIntervalRef=useRef();
    // at the first time load componentDidMount it allows the callback function to callbackRef 
    useEffect(()=>{
        callbackRef.current=callback;
    },[callback]);

    // set the interval time
const start =useCallback(()=>{
        clearIntervalRef.current=setInterval(callbackRef.current, delay)
      },[delay]);

     // set the clearInterval
     const stop=useCallback(()=>{
        clearInterval(clearIntervalRef.current);
     },[]);

     // useEffect for the set and clear the intervals
     useEffect(()=>{
         if(!isrunning){
             setIsrunning(true)
             return;
             
         } else{
            start();
            return stop();
         }
        
     },[isrunning,delay,start,stop])

     // reset the interval 
// const start=useCallback(()=>{
//         stop();
//         set();
//     },[stop,set])
const restart=useCallback(()=>{
    if(!isrunning){
        stop();
        setIsrunning(false)
      return;
    } else{
        return start();
    }
     },[isrunning,start,stop]
)


  return (
    {stop, restart,start}
  )
}

export default useClearInterval;