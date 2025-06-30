import React, { act, useReducer } from 'react'

const UseReducerFunction = () => {

    console.log("Hello")

    const initialState = {
        count : 0,
    }

    const reducer = (state,action)=>{
        switch(action.type) {
            case 'increase' : {
                return { count : state.count + 1 }
            }
            case 'decrease' : {
                return { count : state.count - 1 };
            }
            case 'input' : {
                return { count : action.payload }
            }
            default : {
                return { count : 0 }
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Use Reducer Function</h1>
            <h2>Count : {state.count}</h2>
            <button onClick={()=>dispatch({type : 'increase'})}>Increase</button>
            <button onClick={()=>dispatch({type : 'decrease'})}>Decrease</button>
            <button onClick={()=>dispatch({type : 'default'})}>Rest</button>
            <input type="number" value={state.count} onChange={(e)=> dispatch({type : 'input', payload: Number(e.target.value)})}/>
        </div>
    )
}

export default UseReducerFunction