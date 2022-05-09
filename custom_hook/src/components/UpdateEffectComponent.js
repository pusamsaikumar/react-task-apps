import React, {useState} from 'react'
import useUpdateEffect from './useUpdateEffect';

function UpdateEffectComponent() {
    const [count,setCount]=useState(10);
    useUpdateEffect(()=>alert('current count value is: ' + count),[count]);
  return (
    <div className='container'>
        <h2 className='header'> In this UseUpdateComponent  UseDebounce custom hook will raise within in one second the alret message when stoped the hit the increment button and aswell as Decrenent and reset button </h2>
        <h3 className='header2'>count value: <span>{count}</span></h3><br></br>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default UpdateEffectComponent