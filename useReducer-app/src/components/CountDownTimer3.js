import React,{useReducer,useRef,useEffect} from 'react';

const InitialState={
    count:0,
    isrunning:false
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'start':
            return {...state,isrunning:true};
        case 'stop':
            return {...state,isrunning:false};
        case 'reset':
            return {...state,count:state.count=0,isrunning:false};
        case 'tick':
            return {...state,count:state.count+1};
        default:
            return alert('error');
    }
}

function CountDownTimer3() {
    const [state,dispatch]=useReducer(reducer,InitialState);
    const timeRef=useRef(0);

    useEffect(()=>{
        if(!state.isrunning){
            return;
        }
        timeRef.current=setInterval(()=>dispatch({type:'tick'}),1000);
            return ()=>clearInterval(timeRef.current);
            timeRef.current=0;
    },[state.isrunning])

  return (
    <div>
        <h1>CountDownTimer in seconds with help of useReducer</h1>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'start'})}>start</button>
        <button onClick={()=>dispatch({type:'stop'})}>stop</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>

    </div>
  )
}

export default CountDownTimer3