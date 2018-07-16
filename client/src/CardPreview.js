import React, { Component } from 'react';

class CardPreview extends Component {

  render() {
    return (
      <div>
        <p>{this.props.card.name}</p>
        <input />
      </div>
    )
  }
}

export default CardPreview;
