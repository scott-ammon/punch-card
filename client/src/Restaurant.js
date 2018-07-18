import React, {Component} from 'react';
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
    const restaurant = this.props.restaurants.find((restaurant) => {
      return restaurant._id === this.props.match.params.id
    })

    const button = this.props.user ? (<Button variant="contained" color="primary" type="submit" id="newCard">Add card!</Button>) : ("")

    return (
      <div className="home-container">
        <h1>{restaurant.name}</h1>
        <div>
          <img id="restaurant-img" alt="Restaurant store-front offering card" src={restaurant.img}/>
        </div>
        <h4 className="restaurantText">Location: {restaurant.address}</h4>
        <h4 className="restaurantText">{restaurant.genre}</h4>
        <h4 className="restaurantText">Card Reward: {restaurant.reward}</h4>
        <div className="addCard">
          <form onSubmit={(e) => this.handleSubmit(e, restaurant)}>
            {button}
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Restaurant)
