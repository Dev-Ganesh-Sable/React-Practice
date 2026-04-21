import React, { Component } from 'react'
import UnpureCom from './UnpureCom'
import PureCom from './PureCom'

class ParentComforPureom extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Ganesh"
        }
    }

    componentDidMount() {
        setInterval = (() => {
            this.setState({
                name: "Ganesh"
            })
        }, 2000)
    }

    render() {

        return (
            <div>ParentComponent
                <UnpureCom name={this.state.name} />
                <PureCom name={this.state.name} />
            </div>
        )
    }
}

export default ParentComforPureom