import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import {Link} from 'react-router-dom';

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
    const Map = ReactMapboxGl({
      accessToken: this.props.mapboxKey
    })

    return (
      <div>
        <h4>Collect and use loyalty cards from all your favorite restaurants and food trucks!</h4>
        <Link to={"/restaurant/5b4d0e8034ae4c3fb7c2a2fe"}>Restaurant Check</Link>
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
        <Map
          style="mapbox://styles/scottammon/cjjfwon001qvd2rthricow465"
          center={[-122, 47.5]}
          zoom={[7]}
          containerStyle={{
            height: "70vh",
            width: "100vw"
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Marker
                coordinates={[-0.2416815, 51.5285582]}
                anchor="bottom"
              >MARKER
              </Marker>
              <Feature coordinates={[-122, 51.3233379650232]}
              />
            </Layer>
        </Map>
      </div>
    )
  }
}

export default Home;
