import React,{useReducer} from 'react';


const InitialState={
    count:0
  }
  
  function reducer(state,action){
    switch(action.type){
      case 'increament':
        return {count:state.count+1};
      case 'reset':
        return InitialState;
      case 'decreament':
        return {count:state.count-1};
      default:
      throw new Error()
        //return state;
    }
  }
  
  
  function Counter() {
    const [state,dispatch]=useReducer(reducer,InitialState);
    return (
      <div className="App">
        <h1>Count the numbers like Increase and decreament and Reset to Zero at initial state.</h1>
          <h2>count:{state.count}</h2>
          <button onClick={()=>
          dispatch({type:'increament'})}
          >+</button>
         <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
          <button onClick={()=>
          dispatch({type:'decreament'})}
          >-</button>
       
      </div>
    );
  }
  
  export default Counter;
  