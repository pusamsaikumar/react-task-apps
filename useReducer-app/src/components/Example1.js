import React, {useReducer} from 'react';

const InitialState={
    count:0
}
const ACTIONS={
    INCREAMENT:'increament',
    RESET:'reset',
    DECREAMENT:'decreament'

}
const reducer=(state,action)=>{
    switch(action.type){
        case ACTIONS.INCREAMENT:
          return {count:state.count+1};
        case ACTIONS.RESET:
         // return InitialState;
         return {count:state.count=0};
        case ACTIONS.DECREAMENT:
          return {count:state.count-1};
        default:
       // throw new Error()
        return state;
      }
}

function Example1() {
    const [state,dispatch]=useReducer(reducer,InitialState);
    return (
      <div className="App">
        <h1 className='count-header'>Count the numbers like Increase and decreament and Reset to Zero at initial state.</h1>
          <h2 className='count-header2'>count:<span>{state.count}</span></h2>
          <button className='btn-increment' onClick={()=>
          dispatch({type:ACTIONS.INCREAMENT})}
          >+</button>
         <button className='btn-reset' onClick={()=>dispatch({type:ACTIONS.RESET})}>Reset</button>
          <button className='btn-decrement' onClick={()=>
          dispatch({type:ACTIONS.DECREAMENT})}
          >-</button>
      </div>
    );
}

export default Example1;