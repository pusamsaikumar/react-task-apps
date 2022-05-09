import React from 'react'
import useArrey from './useArrey';

function ArrayComponent() {
    const  {array,set,push,update,filter,remove,clear}=useArrey([1,2,3,4,5,6]);
  return (
    <div className='container'>
        <h2 className='header'>In this component using useArrey custom hook to filter and set,update,remove,push and clear the array </h2>
        <h3 className='header2'>array : <span>{array.join(',')}</span></h3>
        
    
        <button className='btns' onClick={()=>push(7)}>add element into the last index of the array</button><br></br>
        <button className='btns' onClick={()=>update(1,9)}>update the secong  element into new element 9</button><br></br>
        <button className='btns' onClick={()=>filter(n=> n < 3)}>filter the elements, keeping less than 4</button><br></br>
        <button className='btns' onClick={()=>remove(1)}>remove the elements based on index </button><br></br>
        <button className='btns' onClick={()=>set([1,2])}>set the elements into the array</button><br></br>
        <button className='btns' onClick={clear}>clear the array</button><br></br>
    </div>
  )
}

export default ArrayComponent;