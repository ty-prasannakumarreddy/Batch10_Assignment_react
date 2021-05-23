import React, { Component } from 'react'

export default class Home extends Component {
    goto=()=>{
        this.props.history.push("/contactus");
    }
    render() {
        return (
            <div>
                <h1>Home page.......</h1>
                <button onClick={this.goto}>Go to contactUs Page</button>
            </div>
        )
    }
}
