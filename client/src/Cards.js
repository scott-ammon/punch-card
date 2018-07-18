import React, { Component } from 'react';
import axios from 'axios';
import SimpleMediaCard from './SimpleMediaCard';
import {Link} from "react-router-dom";

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
    // console.log("USER IS:", this.props.user)
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
    // console.log(this.state.restaurantArray);
    const cardPreviews = this.state.restaurantArray.map((restaurant, i) => {
      return (<SimpleMediaCard cardId={this.state.cardIds[i]} restaurant={restaurant}/>)
    })

    console.log("cards is:", this.state.cards.data)

    let zeroCards = (!this.state.cards.data || this.state.cards.data.length === 0) ? (
      <div>
        <h4>You have no cards added</h4>
        <Link to={"/"} className="restaurantLink">View Restaurants</Link>
      </div>
    ) : (<div></div>);

    console.log("JSX for cards:", zeroCards)

    return(
        <div className="home-container cardPage">
          <h4>My Cards:</h4>
          {zeroCards}
          <div className="centerCards">
            {cardPreviews}
          </div>
        </div>
    )
  }
}

export default Cards;
