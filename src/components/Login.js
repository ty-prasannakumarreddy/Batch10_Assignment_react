import React, { Component } from 'react'

export default class Login extends Component {
    state={
        user:"",
        pwd:""
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle submit..")
        console.log(this.state);
        localStorage.setItem(this.state.user,JSON.stringify(this.state));
        this.setState({
            user:"",
            pwd:""
        })
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
            <div className="container card md-5 col-md-6">
                <form className="card-body" onSubmit={this.handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={this.state.user}
    noChange={this.handleChange}
    name="user"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
     value={this.state.pwd}
     noChange={this.handleChange}
     name="pwd"/>
  </div>
  <div className="mb-3 form-check">
   
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}
