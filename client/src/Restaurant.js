import React, {Component} from 'react';

class Restaurant extends Component {
  render() {
    return (
      <div className="">
        <h1>Restaurant name here.</h1>
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
