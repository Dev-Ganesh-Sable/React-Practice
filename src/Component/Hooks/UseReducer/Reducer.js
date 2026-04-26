import React from 'react'
import { useReducer } from 'react'

const initilasState = 0

const reducer = (state, action) => {  // its take two parameters 1) state 2) action
    // step 2 
    switch (action) {
        case 'incerment':
            return state + 1
        case 'decerment':
            return state - 1
        case 'reset':
            return initilasState

        default:
            return state
    }
}

function Reducer() {

    // step 01
    const [count, dispatch] = useReducer(reducer, initilasState);  // reducer function take to parameters 
    // 1) reducer functon  
    //  2) initails state

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch("incerment")}>Increment</button>
            <button onClick={() => dispatch("decerment")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default Reducer