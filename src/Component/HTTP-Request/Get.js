import React, { Component } from 'react'
import axios from 'axios'

export class Get extends Component {
    constructor(props) {
        super(props)

        this.state = {
            get: [],
            error:""
        }
    }

    // to get the data from json server

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")

            .then(response => {
                console.log(response);
                this.setState({ get: response.data });
            }).catch(error => {
                console.log(error);
                this.setState({errMgs:"Something Went Wrong"});
            })
    }
  render() {

     const { get,errMgs } = this.state

    return (
      <div>Get Data</div>
    )
  }
}

export default Get