import React, { Component } from 'react';

class CardPreview extends Component {
  constructor() {
    this.state = {
      cards: [
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
      ],
    }
  }

  render() {
    return (
      <h1>My Cards</h1>

    )
  }
}

export default CardPreview;
