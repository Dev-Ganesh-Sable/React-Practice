
import React, { Component } from 'react'

export default class CompB extends Component {

    // first step of component life cycle
    constructor(props) {
        super(props)

        this.state = {
            name: "Ganesh"
        }
        console.log("this is contructor method of Life cycle of component B");
    }

    // second step of component life cycle
    static getDerivedStateFromProps(props, state) {
        console.log("life cycle of compoennt B getDerivedStateFromProps");
        return null
    }

    // fouth step of comonent life cycle 

    compoentDidMount() {
        console.log("life cycle of compoennt B did mount");
    }

    render() {
        return (
            <div>CompB</div>
        )
    }
}
