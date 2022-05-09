import React, {useCallback,useEffect,useRef} from 'react'
import { flushSync } from 'react-dom';

function useUpdateEffect(callback,dependencies) {
    const firstRenderRef=useRef(true);
    useEffect(()=>{
        if(firstRenderRef.current){
            firstRenderRef.current=false;
        } 
            return callback();
    },[dependencies])
  return (
    <div>useUpdateEffect</div>
  )
}

export default useUpdateEffect