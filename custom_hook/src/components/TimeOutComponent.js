import  {useState} from 'react';
import useTimeOut from './useTimeOut';

function TimeOutComponent() {
    const [count,setCount]=useState(10);
     const {clear, reset}=useTimeOut(()=>setCount(0),5000)
  return (
    <div className='container'>
        <h2 className='header'>TimeOutComponent using custom hook useTimeOut used here to clear and reset timer </h2>
        <h4 className='header2'>Count the value: <span>{count}</span></h4>
        <button onClick={()=>setCount(c=>c+1)}>Increment</button>
         <button onClick={clear}>clearTimer</button>
        <button onClick={reset}>resetTimer</button> 
    </div>
  )
}

export default TimeOutComponent