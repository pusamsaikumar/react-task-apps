import {useState} from 'react'

function useArrey(defaultvalues) {
    const [array,setArray]=useState(defaultvalues);
  const push=(element)=>{
        setArray(a=>[...a,element])
  };
  const filter=(callback)=>{
      setArray(a=>[
          a.filter(callback)
      ])
  };
  const update=(index,newElement)=>{
      setArray(a=>[
          ...a.slice(0,index),
          newElement,
          ...a.slice(index+1,a.length-1)
      ])
  };
  const remove=(index)=>{
      setArray(a=>[...a.slice(0,index),...a.slice(index+1,a.length-1)])
  };
  const clear=()=>{
      setArray([]);
  }









  return (
    {array,set:setArray,push,update,filter,remove,clear}
  )
}

export default useArrey;