import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      response: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Handles changes to email and password fields
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // POST to backend '/auth/login' to authenticate user
  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      if(result.data.hasOwnProperty('error')) {
        this.setState({
          response: result.data
        })
      } else {
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftToken(result.data)
        this.setState({
          response: null
        })
      }
    })
  }

  render() {
    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <TextField
              id="email"
              name="email"
              label="Email"
              className="emailField"
              value={this.state.email}
              onChange={this.handleInputChange}
              margin="normal"
            /><br />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            className="passwordField"
            value={this.state.password}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />
          <Button id="login-btn" variant="contained" color="primary" type="submit" value="Log In">Log In</Button>
        </form>
        <div id="login-link">
          <Link to={"/signup"}>Not a member? Sign up today!</Link>
        </div>
        <p className="alert-msg">{(this.state.response) ? this.state.response.message : ''}</p>
      </div>
    );
  }
}

export default Login
