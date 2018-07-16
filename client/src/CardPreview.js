import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CardPreview extends Component {

  render() {
    return (
      <div>
        <p>{this.props.card.name}</p>
        <Link to={`/card/${this.props.card.id}`}>Show</Link>
      </div>
    )
  }
}

export default CardPreview;
