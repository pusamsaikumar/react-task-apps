import React,{useReducer} from 'react';
const InitialState=
{
    count:1
}
const reducers=(state,action)=>{
    switch(action.type){
        case 'increment-five':
            return {count:state.count+5}
            case 'decrement-five':
                return {count:state.count-5}
                case 'reset':
                    return {count:state.count=1};
                    case 'inc-multifying-five':
                        return {count:state.count*2}
                        case 'dec-multifying-five':
                        return {count:state.count*-2}
        default:
            return state;
    }
}

function Example3() {
    const [state,dispatch]=useReducer(reducers,InitialState)
  return (
    <div>
        <h2>count the current value: {state.count}</h2>
        <button onClick={()=>dispatch({
            type:'increment-five'
        })}>increment-five</button> <br></br> <br></br>
         <button onClick={()=>dispatch({
            type:'decrement-five'
        })}>decrement-five</button> <br></br> <br></br>
         <button onClick={()=>dispatch({
            type:'reset'
        })}>reset</button><br></br> <br></br>
          <button onClick={()=>dispatch({
            type:'inc-multifying-five'
        })}>inc-multifying-two</button><br></br> <br></br>
          <button onClick={()=>dispatch({
            type:'dec-multifying-five'
        })}>inc-dec-multify-two</button>
    </div>
  )
}

export default Example3;
