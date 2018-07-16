import React, { Component } from 'react';
import CardPreview from './CardPreview';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    this.setState({cards: [
      {
        name: 'Teriyaki Highway',
        punches: 4,
        reqPunches: 9
      },
      {
        name: 'Olive Garden',
        punches: 5,
        reqPunches: 6
      },
      {
        name: 'Taco Del Mar',
        punches: 2,
        reqPunches: 8
      }
    ]
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
