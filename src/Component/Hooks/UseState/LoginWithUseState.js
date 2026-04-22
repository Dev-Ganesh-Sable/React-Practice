
// login example using use state hook : 

// UseState Hook : 
// i) store and update component
// ii)store and update data using functional component

import React, { useState } from 'react'

function LoginWithUseState() {

    // define use state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // handel submit function
    const handelSubmit = (e) => {
        e.preventDefault();
    }

    // if else condition
    if (email === "admin@gmail.com" && password === "1234") {
        setMessage("User Login Successfully");
    }
    else {
        setMessage("Invalid Email and Password");
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handelSubmit}>
                <input type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />

                <input type='password' placeholder='enter password' value={password} onChange={(e) => setEmail(e.target.value)} />
                <br />

                <button type='submit'>Login</button>
            </form>

            <h3>{message}</h3>
        </div>
    )
}

export default LoginWithUseState

