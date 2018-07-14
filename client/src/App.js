import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup';
import {UserProfile} from './UserProfile';
import Home from './Home';
import MenuAppBar from './MenuAppBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      lockedResult: '',
      mapboxKey: process.env.REACT_APP_MAPBOX
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
    // render home component upon landing on the site

      return (
        <Router>
          <div className="App">
            <MenuAppBar />
            <Route exact path="/" component = {() => <Home mapboxKey={this.state.mapboxKey}/>} />
            <Route exact path="/signup" component = {() => <Signup liftToken={this.liftTokenToState} />} />
            <Route exact path="/login" component = {() => <Login liftToken={this.liftTokenToState} />} />
          </div>
        </Router>
      )
  }
}

export default App;
