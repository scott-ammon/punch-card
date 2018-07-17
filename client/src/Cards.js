import React, { Component } from 'react';
import axios from 'axios';
import SimpleMediaCard from './SimpleMediaCard';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      restaurantArray: [],
      cardIds: []
    }
  }

  componentDidMount() {
    console.log("USER IS:", this.props.user)
    axios.post("/user/cards/all", {
      user: this.props.user
    }).then(cards => {
      var restaurantArray = []
      var cardIds = []

      cards.data.forEach(card => {
        restaurantArray.push(this.props.restaurants.find((restaurant) => {
          if(restaurant._id === card.restaurant) {
            cardIds.push(card._id)
          }
          return restaurant._id === card.restaurant
        }))
      })
        
      this.setState({
        cards: cards,
        restaurantArray: restaurantArray,
        cardIds: cardIds
      })
    })
  }

  render() {
    console.log(this.state.restaurantArray);
    const cardPreviews = this.state.restaurantArray.map((restaurant, i) => {
      return (<SimpleMediaCard cardId={this.state.cardIds[i]} restaurant={restaurant}/>)
    })

    return(
        <div>
          <h4>My Cards:</h4>
          {cardPreviews}
        </div>
    )
  }
}

export default Cards;
