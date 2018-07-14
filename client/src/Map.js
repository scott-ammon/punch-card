import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = this.props.mapboxKey;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/scottammon/cjjfwon001qvd2rthricow465',
      center: [-122, 47.5],
      zoom: 7
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div class="row">
        <div className="map col xl12 l12 m12 s12" id="map" ref={el => this.mapContainer = el}></div>
      </div>
    );
  }
}

export default Map