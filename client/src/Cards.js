import React, { Component } from 'react';
import CardPreview from './CardPreview';
import axios from 'axios';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    console.log("this.props.user is: ", this.props.user)
    axios.post("/user/cards/all", {
      user: this.props.user
    }).then(result => {
      console.log(result)
      this.setState({
        cards: result
      })
    })
  }

  render() {

    let cardsList = this.state.cards.map((card, i) => {
      return(
        <CardPreview card={card} />
      )
    })

    return (
      <div>
        <h1>My Cards</h1>
        <div>
          {cardsList}
        </div>
      </div>
    )
  }
}

export default Cards;
