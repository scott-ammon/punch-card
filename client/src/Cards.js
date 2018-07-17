import React, { Component } from 'react';
import axios from 'axios';
import SimpleMediaCard from './SimpleMediaCard';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
  }

  // componentDidMount() {
  //   console.log("this.props.user is: ", this.props.user)
  //   axios.post("/user/cards/all", {
  //     user: this.props.user
  //   }).then(result => {
  //     console.log(result)
  //     this.setState({
  //       cards: result
  //     })
  //   })
  // }

  render() {
    return(
    // let cardsList = this.state.cards.map((card, i) => {
      // return(
        <div>
        <SimpleMediaCard />
        </div>
      // )
    // }
  )

//
//     return (
//       <div>
//         <h1>My Cards</h1>
//         <div>
//
//         </div>
//       </div>
//     )
  }
}

export default Cards;
