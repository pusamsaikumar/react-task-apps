import React,{useCallback,useRef,useEffect} from 'react'

function UseDebounce(callback,delay,dependencies) {
    const callbackRef=useRef(callback);
    const timeoutRef=useRef();
    useEffect(()=>{
        callbackRef.current=callback;
    },[callback]);
    // const set=useCallback(()=>{
    //     timeoutRef.current=setTimeout(callbackRef.current,delay)
    // },[delay]);
    // const clear=useCallback(()=>{
    //     clearTimeout(timeoutRef.current);
    // },[])
    useEffect(()=>{
        callbackRef.current=callback;
        clearTimeout(timeoutRef.current);
    },[]);
    useEffect(()=>{
        clearTimeout(timeoutRef.current);
        timeoutRef.current=setTimeout(callbackRef.current,delay);
    },[...dependencies])
}

export default UseDebounce;