import {useCallback,useRef,useEffect} from 'react'

function useTimeOut(callback,delay) {
    const callbackRef=useRef(callback)
    const timeoutRef=useRef()

    useEffect(()=>{
        callbackRef.current=callback
    },[callback]);

    // settimeout 
    const set=useCallback(()=>{
        timeoutRef.current=setTimeout(callbackRef.current,delay)
    },[delay]);
    // clearTimeout
    const clear=useCallback(()=>{
        clearTimeout(timeoutRef.current);
    },[]);

    useEffect(()=>{
        set();
        return clear
    },[delay,set,clear]);

    // resettimeout
    const reset=useCallback(()=>{
        clear();
        set();
    },[clear,set])

  return {reset,clear}
}

export default useTimeOut;