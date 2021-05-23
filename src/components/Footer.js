import React, { Component } from 'react'
import {withRouter} from "react-router"

 class Footer extends Component {

    render() {
        return (
            <div>
                <h1>This is footer page....</h1>
                <button onClick={()=>{
                    this.props.history.push("/home");
                }}>Go to Home</button>
            </div>
        )
    }
}
export default withRouter(Footer);