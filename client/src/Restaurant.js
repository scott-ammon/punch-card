import React, {Component, Link} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
      e.preventDefault()
      console.log(this.props.user)
      axios.post("/user/cards", {
        user: this.props.user
      }).then(result => {
        console.log(result)
      })
    }

  render() {
    var restaurant = this.props.restaurants.find((restaurant) => {
      return restaurant._id === this.props.match.params.id
    })

    return (
      <div className="">
        <h1>{restaurant.name}</h1>
        <div>
          <img src=""/>
        </div>
        <h4>Location: {restaurant.address}</h4>
        <h4>{restaurant.genre}</h4>
        <h4>Card Reward: {restaurant.reward}</h4>
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
