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
      <div>
        <Grid container justify="center" direction="column" alignItems="center">
          <h1>Restaurant Name</h1>
          <p>8 punches to get a free sandwich</p>
          <div>
            1 2 3 4 5 6 7 8 9 10
          </div>
          <div>
          <TextField
            id="code"
            name="code"
            label="enter code to punch..."
            className="codeField"
            value={this.state.code}
            onChange={this.handleInputChange}
            margin="normal"
          />
            <Button variant="contained" color="primary">
              Redeem
            </Button>
          </div>
          <div>
            <Button variant="contained" color="secondary">
              Remove Card
            </Button>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Card;
