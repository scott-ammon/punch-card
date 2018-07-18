import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withRouter} from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      response: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Handles changes to name, email & password fields
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // POST to backend '/auth/signup' to add a new user
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.password.length < 8 || this.state.password.length > 99) {
      // Password does not meet length requirements
      this.setState({
        error: {
          type: 'auth_error',
          status: 401,
          message: 'Password must be between 8 and 99 characters.'
        },
        password: ''
      })
    } else {
      axios.post('/auth/signup', {
        name: this.state.name,
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
      this.props.history.push("/cards")
    }
  }

  render() {
    return(
      //This div is a Material UI container, with Signup form text boxes and a button.
      <div className="form-container">
        <div className="signup-header">
          <h4>Sign up now to start collecting rewards at all your favorite restaurants and food trucks!</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name"
            name="name"
            type="text"
            label="Name"
            className="nameField"
            value={this.state.name}
            onChange={this.handleInputChange}
            margin="normal"
          /><br />
          <TextField
            id="email"
            name="email"
            type="text"
            label="Email"
            className="emailField"
            value={this.state.email}
            onChange={this.handleInputChange}
            margin="normal"
          /><br />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            className="passwordField"
            value={this.state.password}
            onChange={this.handleInputChange}
            margin="normal"
          /><br />
          <Button variant="contained" color="primary" type="submit" value="Sign up">Sign up</Button>
        </form>
        <p className="alert-msg">{(this.state.response) ? this.state.response.message : ''}</p>
      </div>
    )
  }
}

export default withRouter(Signup)
