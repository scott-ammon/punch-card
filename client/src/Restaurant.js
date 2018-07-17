import React, {Component, Link} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.state ={ 
      user: null,
      restaurant: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    var restaurant = this.props.restaurants.find((restaurant) => {
      return restaurant._id === this.props.match.params.id
    })
    this.setState({
      restaurant: restaurant
    })
  }
  
  handleSubmit(e) {
      e.preventDefault()
      console.log(this.props.user)
      axios.post("/user/cards", {
        user: this.props.user,
        restaurant: this.state.restaurant._id
      }).then(result => {
        console.log(result)
      })
    }

  render() {
    return (
      <div className="">
        <h1>{this.state.restaurant.name}</h1>
        <div>
          <img src=""/>
        </div>
        <h4>Location: {this.state.restaurant.address}</h4>
        <h4>{this.state.restaurant.genre}</h4>
        <h4>Card Reward: {this.state.restaurant.reward}</h4>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Button component={Link} to="/cards" variant="contained" color="primary" type="submit">Add new card!</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Restaurant
