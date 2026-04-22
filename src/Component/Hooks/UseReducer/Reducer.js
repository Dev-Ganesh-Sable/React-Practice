import React from 'react'
import { useReducer } from 'react'

const initilasState = 0

const reducer = (state, action) => {
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
    const [count, dispatch] = useReducer(reducer, initilasState);

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