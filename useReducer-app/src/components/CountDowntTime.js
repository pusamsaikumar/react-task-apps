import React, {useState,useRef,useEffect} from 'react'

function CountDowntTime() {
    const [val,setVal]=useState(100);
    const [pause,setPause]=useState(false);
    const intervalRef=useRef();

    const Decrese=()=>{
        setVal((prevState)=>prevState-1);
    }
    useEffect(()=>{
        intervalRef.current=setInterval(Decrese,1000);
        return ()=>clearInterval(intervalRef.current);
    },[])
    const handleClick=()=>{
        if(!pause){
            clearInterval(intervalRef.current);
        } else{
        intervalRef.current=setInterval(Decrese,1000);
        }
        setPause((prevStat)=>!prevStat);
    }
    
  return (
    <div>
        <h1>countdown timer in seconds</h1>
        <h1>count:{val}</h1>
        <button onClick={handleClick}>{!pause ? 'Run' : 'Pause'}</button>
      
    </div>
  )
}

export default CountDowntTime;