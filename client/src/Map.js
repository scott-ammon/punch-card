import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = '';

class Map extends React.Component {
  componentDidMount() {
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
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map