
import React, { Component } from 'react'

export class RefClassCom extends Component {
    // ref : reference is used in react to directly access a DOM element or react componentss


    constructor(props) {
        super(props)

        this.inputRef = React.createRef();

    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render() {

        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={()=>{this.focusInput()}}>Click Me</button>
            </div>
        )
    }
}

export default RefClassCom