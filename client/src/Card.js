import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

    // let card = this.props.cards.find((card) => {
    //       return card.id === parseInt(this.props.match.params.id)
    //     })

    return (
      <div className="home-container">
        <div className="card-container">
          <h1 className="restaurantName">Restaurant Name</h1>
          <p className="reqPunches">8 punches to get a free sandwich</p>
          <div>
            1 2 3 4 5 6 7 8 9 10
          </div>
          <div>
          <TextField
            spacing={40}
            id="code"
            name="code"
            label="enter code to punch..."
            className="codeInput"
            value={this.state.code}
            onChange={this.handleInputChange}
            margin="normal"
          />
            <Button variant="contained" color="primary" className="redeemButton">
              Redeem
            </Button>
          </div>
        </div>
          <div>
            <Button variant="contained" color="secondary" justify="flex-end">
              Remove Card
            </Button>
          </div>
      </div>
    )
  }
}

export default Card;
