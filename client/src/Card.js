import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.card.name}</h1>
        <p>{this.props.card.reqPunches} punches to get a free sandwich</p>
        <div>
          1 2 3 4 5 6 7 8 9 10
        </div>
        <div>
          <button>Remove Card</button>
        </div>
      </div>
    )
  }
}

export default Card;
