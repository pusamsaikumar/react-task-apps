import React,{useState} from 'react'
import useClearInterval from './useClearInterval';

function ClearIntervalComponent() {
    const [count,setCount]=useState(0);
   
    const {stop,start,restart}=useClearInterval(()=>setCount((prevState)=>prevState+1),1000);
  return (
    <div className='container'>
        <h1 className='header'>ClearIntervalComponent in this component using useClearInterval custom hook to reset and stop the interval here</h1>
        <h3 className='header2'>Count number of value:<span> {count}</span></h3><br></br>
        
        <button onClick={start}>satrt interval</button>    
        <button onClick={stop}>stop interval</button>
        <button onClick={restart}>re-start interval</button>
        <button onClick={()=>setCount(0)}>reset</button>

    </div>
  )
}

export default ClearIntervalComponent;