import React,{useState,useMemo} from 'react';

function Usememo() {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(5);

    const fact=(n)=>{
        let answer=1;
        for(var i=n; i>=1; i++){
            answer=answer*i;
        }
        console.log('Factorial function calling');
        return answer;
    }
    // without using useMemo its renders again and again without any need . any other elements get updated it will be render again .
    //const Factorial=fact(number);  
    // using useMemo its early first time renders and when state changes it will be rendered
    const Factorial=useMemo(() => fact(number), [number]);
  return (
    <div>
        <h1>useMemo hook </h1>
        Factorial number: {Factorial}<br />
        <button onClick={()=>setNumber(number+1)}>Increment Factorial number</button><br></br>
        
        <button onClick={()=>setCount(count+1)}>Increment Count</button><br/>
        Count: {count}

    </div>
  )
}

export default Usememo;