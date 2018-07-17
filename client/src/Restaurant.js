import React, {Component, Link} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e, restaurant) {
      e.preventDefault()
      console.log(this.props.user)
      axios.post("/user/cards", {
        user: this.props.user,
        restaurant: restaurant._id
      }).then(result => {
        console.log(result)
        this.props.history.push("/cards");
      })
    }

  render() {
    var restaurant = this.props.restaurants.find((restaurant) => {
      return restaurant._id === this.props.match.params.id
    })

    console.log(restaurant);

    return (
      <div className="home-container">
        <h1>{restaurant.name}</h1>
        <div>
          <img id="restaurant-img" src={restaurant.img}/>
        </div>
        <h4>Location: {restaurant.address}</h4>
        <h4>{restaurant.genre}</h4>
        <h4>Card Reward: {restaurant.reward}</h4>
        <div>
          <form onSubmit={(e) => this.handleSubmit(e, restaurant)}>
            <Button variant="contained" color="primary" type="submit">Add new card!</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Restaurant)
