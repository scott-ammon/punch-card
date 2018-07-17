import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }
  
  handleSubmit(e) {
      e.preventDefault()
      console.log('handleSubmit hit');
      axios.delete("/user/cards/" + this.props.match.params.id + "/" + this.props.user._id).then(result => {
        console.log(result)
        this.props.history.push("/cards");
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
          <form className="removeCardButton" onSubmit={this.handleSubmit}>
            <Button type="submit" variant="contained" color="secondary" alignItems="flex-end">
              Remove Card
            </Button>
          </form>
      </div>
    )
  }
}

export default withRouter(Card);
