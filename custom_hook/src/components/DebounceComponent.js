import React, {useState} from 'react'
import UseDebounce from './UseDebounce';

function DebounceComponent() {
    const [count,setCount]=useState(0);
    UseDebounce(()=>alert('current count value is: ' + count),1000,[count]);
  return (
    <div className='container'>
        <h2 className='header'> In this DebounceComponent  UseDebounce custom hook will raise the alret message when stoped the hit the increment button and aswell as Decrenent and reset button </h2>
        <h3 className='header2'>count value: <span>{count}</span></h3><br></br>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Increment</button>
    </div>
  )
}

export default DebounceComponent;