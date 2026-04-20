
import React from 'react'
import demo from "../style/demo.css"

function Style() {
    // for internal css style code
    const head = {
        color: "white",
        FontSize: "20px",
        textTransform: "uppercase",
        backgroundColor:"black"
    }
    return (
        <div>
            {/* inline css */}
            <h3 style={{ color: "white", background: "black", textTransform: "uppercase" }}>Hello Ganesh</h3>

            {/* internal style */}
            <h2 style={head}>Siddhi</h2>

            {/*  external css style sheet method */}
            <h1>Ganesh</h1>
        </div>
    )
}

export default Style