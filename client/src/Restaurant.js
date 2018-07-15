import React, {Component} from 'react';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: this.props.restaurants
    }
  }
  render() {
    return (
      <div className="">
        <h1>{this.state.restaurants[0].name}}</h1>
        <div>Image for Rest here.</div>
        <div>Map here.</div>
        <h4>Restaurant Genre</h4>
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="submit" value="Add">Add new card!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Restaurant
