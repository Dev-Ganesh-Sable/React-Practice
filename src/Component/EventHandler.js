
import React from 'react'

function EventHandler() {

    function click() {
        console.log("this is click function");
    }

    function fun() {
        alert("this is another example of event handler")
    }

    return (
        <div>
            <h3>Event Handler</h3>
            <button onClick={() => { click() }}>Click</button>
            <button onClick={() => { fun() }}>second</button>


        </div>
    )
}

export default EventHandler