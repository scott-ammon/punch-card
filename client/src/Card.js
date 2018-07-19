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
        console.log(result.data)
          this.setState({
            punches: result.data.punches
          })
        // if (result.data.hasOwnProperty("error")) {
        //   this.setState({
        //     response: result.data.error
        //   })
        // } else if (result.data.hasOwnProperty("success")) {
        //   this.setState({
        //     response: result.data.success,
        //     punches: this.state.restaurant.reqPunches
        //   })
        // } else {
        //   console.log("BEFORE UPDATE:", this.state.punches)
        //   console.log("BEFORE - YOU GOT:", result)
        //   this.setState({
        //     punches: result.data.punches,
        //     response: null
        //   }, () => {
        //     console.log("AFTER UPDATE:", this.state.punches)
        //     console.log("AFTER - YOU GOT:", result)
        //   })
        // }
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
          punches: card.data[0].punches
        })
      })
    }

  render() {

    // Declare variable that stores results 
    // this.state.restaurant.reqPunches === this.state.punches
    // return the message / code + button (links to the same submitHandler)
      // else, display the current code

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

    const cardDisplay = (this.state.restaurant.reqPunches === this.state.punches) ? (
      <div>
        <h5>YOU CAN REDEEM YOUR CARD</h5>
      </div>
    ) : (<div className="card-container">
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
        </div>)

    return (
      <div className="home-container">
        {cardDisplay}
        {/* <div className="card-container">
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
        </div> */}
        <form className="removeCardButton" onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="secondary" alignItems="flex-end">Remove Card</Button>
        </form>
        <h5>{this.state.response}</h5>
      </div>
    )
  }
}

export default withRouter(Card);
