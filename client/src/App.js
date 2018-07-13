import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup';
import {UserProfile} from './UserProfile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      lockedResult: ''
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    localStorage.removeItem('mernToken')
    // Remove user info from state
    this.setState({
      token: '',
      user: null
    })
  }

  checkForLocalToken() {
    // Look in local storage for the token
    let token = localStorage.getItem('mernToken')
    if(!token || token === 'undefined') {
      // There was no token
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      });
    } else {
      // Token found in localStorage. send back to be verified
      axios.post('/auth/me/from/token', {
        token
      }).then(result => {
        // Put the token in localStorage
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch(err => console.log(err))
    }
  }

  componentDidMount() {
    this.checkForLocalToken()
  }

  handleClick(e) {
    e.preventDefault()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token;
    axios.get('/locked/test').then(result => {
      console.log("response from backend route: ", result)
      this.setState({
        lockedResult: result.data
      })
    })
  }

  render() {
    let user = this.state.user
    if(user) {
      return (
      <div className="App">
        <UserProfile user={this.state.user} logout={this.logout} />
        <a onClick={this.handleClick}> Test the protected route</a>
        <p>{this.state.lockedResult}</p>
      </div>
      );
    } else {
      return (
        <div className="App">
          <Signup liftToken={this.liftTokenToState} />
          <Login liftToken={this.liftTokenToState} />
        </div>
      )
    }
    
  }
}

export default App;
