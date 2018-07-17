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
          <p className="reqPunches">10 punches to get a free sandwich!</p>
          <div className="numberOfPunches">
            <div className="one punch">
            </div>
            <div className="two punch">
            </div>
            <div className="three punch">
            </div>
            <div className="four punch">
            </div>
            <div className="five punch">
            </div>
            <div className="six punch">
            </div>
            <div className="seven punch">
            </div>
            <div className="eight punch">
            </div>
            <div className="nine punch">
            </div>
            <div className="ten punch">
            </div>
          </div>
            <TextField
              placeholder="enter code to punch..." id="codeInput" underlineStyle={{display: 'none'}}
            />
              <Button variant="contained" color="primary">
                Redeem
              </Button>
        </div>
          <div className="removeCardButton">
            <Button variant="contained" color="secondary" alignItems="flex-end">
              Remove Card
            </Button>
          </div>
      </div>
    )
  }
}

export default Card;
