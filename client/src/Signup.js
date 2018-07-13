import React, {Component} from 'react';
import axios from 'axios';

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
  }

  render() {
    return(
      <div>
        <p>{(this.state.response) ? this.state.response.message : ''}</p>
        <form onSubmit={this.handleSubmit}>
          Name: <input type='text' name="name" value={this.state.name} onChange={this.handleInputChange} /><br />
          Email: <input type='email' name="email" value={this.state.email} onChange={this.handleInputChange} /><br />
          Password: <input type='password' name="password" value={this.state.password} onChange={this.handleInputChange} />
          <button type="submit" value="Sign up">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup