import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      validpassword:false
    }
  }

  firstName = (e) => {
    console.log(e.target.value)
    this.setState({ firstName: e.target.value })
  }
  lastName = (e) => {
    console.log(e.target.value)
    this.setState({ lastName: e.target.value })
  }

  password =(e) =>{
    var passw=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    console.log(e.target.value)
    this.setState({password:e.target.value})
    if(e.target.value.match(passw)){
      console.log("match")
      this.setState({validpassword:true})
    }else{
      this.setState({validpassword:false})
    }
  }
  validateForm = (e) => {
    e.preventDefault();
    console.log(e)
  }
  render() {
    return (
      <div class="container">
        <h1>Login Form</h1>
        <div className="col-md-6 m-auto">
          <form class="form-box" id="form" onSubmit={this.validateForm} >
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>First Name:</label>
                  <input required type="text" value={this.state.firstName} class="form-control" placeholder="Enter First Name" onChange={this.firstName} />
                  {
                    this.state.firstName.length <= 2 && this.state.firstName?
                       < span className="error-warning">First Name should have atleast 2 characters </span> :null }
                </div>
              <div class="form-group">
                
                <label>Email:</label>
                <input required type="email" class="form-control" placeholder="Enter email" />

              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Last Name:</label>
                <input required type="text"  value={this.state.lastName}  class="form-control" placeholder="Enter Last Name" onChange={this.lastName} />
                {
                   this.state.lastName.length <= 2 && this.state.lastName?
                   <span className="error-warning">Last Name should have atleast 2 characters </span>: undefined
                }
              </div>
              <div class="form-group">
                <label>Password:</label>
                <input required type="password" class="form-control" placeholder="Enter Password" onChange={this.password} />
                {
                  this.state.validpassword ? undefined:
                  <span className="error-warning">6 chars with atleast One number, one uppercase and one lowercase alphabet is must</span> 
                }
              </div>
            </div>
            <div class="col-xs-12">
              <button type="submit" style={{ "width": "100%" }}>Claim you Trial</button>
            </div>
            </div>
          </form>
      </div>
      <div className="ps">PS: I just built that in 20- 30mins. Most of the time got wasted in trying to setup codepen and the stackblitz but didn't work well for me</div>
      </div >
    );
  }
}

export default App;
