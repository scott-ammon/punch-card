import React, { Component } from 'react';
import Map from './Map';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Home extends Component {
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
        <h4>Collect and use loyalty cards from all your favorite restaurants and food trucks!</h4>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search"
            name="search"
            className="searchField"
            value={this.state.search}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button id="search-btn" variant="contained" color="primary" type="submit">Search</Button>
        </form>
        <Map restaurants={this.props.restaurants} mapboxKey={this.props.mapboxKey}/>
      </div>
    )
  }
}

export default Home;
