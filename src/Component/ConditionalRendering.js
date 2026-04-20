import React, { Component } from 'react'

export class ConditionalRending extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        // with if else condition
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Ganesh 
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }

        // -------------------------------------------------------------------------------------

        // using verible

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ganesh</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>

        // }

        // return <div>{message}</div>

        // -------------------------------------------------------------------------------------------

        // with ternary operator

        // return (
        //     this.state.isLoggedIn ? <div>Welcome Ganesh</div> : <div>Welcome Guest</div>
        // )
    }
}

export default ConditionalRending