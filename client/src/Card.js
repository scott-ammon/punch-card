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
      restaurant: {},
      punches: 0,
      response: "",
      rewardInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.punchCard = this.punchCard.bind(this)
  }

  handleChange(e) {
    this.setState({
      rewardInput: e.target.value
    })
  }
  
  handleSubmit(e) {
      e.preventDefault()
      axios.delete("/user/cards/" + this.props.match.params.id + "/" + this.props.user._id).then(result => {
        this.props.history.push("/cards");
      })
    }

    punchCard(e) {
      e.preventDefault()
      axios.put("/user/cards/" + this.props.match.params.id, {
        restaurantId: this.state.restaurant._id,
        rewardCode: this.state.rewardInput,
        reqPunches: this.state.restaurant.reqPunches,
        punches: this.state.punches
      }).then(result => {
        if (result.data.hasOwnProperty("error")) {
          this.setState({
            response: result.data.error
          })
        } else if (result.data.hasOwnProperty("success")) {
          this.setState({
            response: result.data.success,
            punches: result.data.card.punches
          })
        } else {
          console.log("RESULT OF UPDATED CARD:", result)
          this.setState({
            punches: result.data.punches,
            response: null
          }, ()=>{
            console.log('special kyle', this.state)
          })
        }
      })
    }

    componentDidMount() {
      axios.post("/user/cards/" + this.props.match.params.id, {
        user: this.props.user
      }).then(card => {
        var restaurant = this.props.restaurants.find(restaurant => {
          return restaurant._id === card.data[0].restaurant
        })
        this.setState({
          restaurant,
          card: card.data[0]
        })
      })
    }

  render() {

    var punchedArray = []
    var unPunchedArray = []

    var punched = this.state.punches
    for (let i = 0; i < punched; i++) {
      punchedArray.push(<div className="punched"></div>)
    }

    var unPunched = this.state.restaurant.reqPunches - punched
    for (let i = 0; i < unPunched; i++) {
      unPunchedArray.push(<div className="punch"></div>)
    }

    console.log("PUNCHED", punched)
    console.log("UNPUNCHED", unPunched)
    return (
      <div className="home-container">
        <div className="card-container">
          <h1 className="restaurantName">{this.state.restaurant.name}</h1>
          <p className="reqPunches">{this.state.restaurant.reward}</p>
          <div className="numberOfPunches">
            {punchedArray}
            {unPunchedArray}
          </div>
          <form onSubmit={this.punchCard}>
            <TextField
              placeholder="enter code to punch..." id="codeInput" underlineStyle={{display: 'none'}} onChange={this.handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Redeem
            </Button>
          </form>
          </div>
          <form className="removeCardButton" onSubmit={this.handleSubmit}>
            <Button type="submit" variant="contained" color="secondary" alignItems="flex-end">Remove Card</Button>
          </form>
          <h5>{this.state.response}</h5>
      </div>
    )
  }
}

export default withRouter(Card);
