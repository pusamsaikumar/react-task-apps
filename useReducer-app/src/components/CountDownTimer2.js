
import React,{useState,useRef,useEffect} from 'react'

function CountDownTimer2() {
    const [count,setCount]=useState(0);
    const [isrunning,setIsrunning]=useState(false);
    const inputElementRef=useRef(0);
    
    const tick=()=>{
        setCount((prevState)=>prevState+1);
        setIsrunning(false)
    }

useEffect(()=>{
    if(!isrunning){
       return;
    } 
    inputElementRef.current=setInterval(tick,1000);
    return ()=>clearInterval(inputElementRef.current);
            inputElementRef.current=0
},[isrunning]);


  return (
    <div>
        <h1>set countDown Timer like stop watch using stop and start and reset buttons</h1>
        <h2>count : {count}</h2>
        <button onClick={()=>{
            setCount((prevState)=>prevState);
            setIsrunning(true);
        }}>start</button>
        <button onClick={()=>{
              setCount((prevState)=>prevState);
              setIsrunning(false);
        }}>stop</button>
        <button onClick={()=>{
             setCount(0);
             setIsrunning(false);
        }}>reset</button> 
    </div>
  )
}

export default CountDownTimer2;