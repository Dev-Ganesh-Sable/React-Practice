
import React, { Component } from 'react'
import CompB from './CompB';

export default class CompA extends Component {
    // first step of component life cycle
    constructor(props) {
        super(props)

        this.state = {
            name: "Ganesh"
        }
        console.log("this is contructor method of Life cycle of component");
    }

    // second step of component life cycle
    static getDerivedStateFromProps(props, state) {
        console.log("life cycle of compoennt getDerivedStateFromProps");
        return null
    }
    // third step component life cycle

    render() {
        return (
            <div>
                <CompB />
                <div>CompA</div>
            </div>
        )
    }
}
