
// import React from 'react'
// import { useState } from 'react'

// function State() {

//     const [counter, setCounter] = useState(0);

//     return (
//         <div>
//             <h4>State In React</h4>
//             <h2>Conter : {counter}</h2>
//             <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
//             <button onClick={() => setCounter(counter - 1)}>Decrement Counter</button>

//         </div>
//     )
// }

// export default State

// class component

import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increaseCount}>Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>

            </div>
        );
    }
}

export default Counter;