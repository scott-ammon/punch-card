import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
  componentDidMount() {
    let restaurantsArray = this.props.restaurants;
    mapboxgl.accessToken = this.props.mapboxKey;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/scottammon/cjjfwon001qvd2rthricow465',
      center: [-122, 47.5],
      zoom: 7
    });

    // empty array to hold each mapboxgl marker
    var markerArray = [];

    // add all projects to map on main get route to '/map'
    restaurantsArray.forEach(function(restaurant) {
      var marker = new mapboxgl.Marker()
      .setLngLat([restaurant.lng, restaurant.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML("<a href='/restaurant/" + restaurant._id + "'>" + restaurant.name + "</a>"))
      .addTo(this.map);
      markerArray.push(marker);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map" id="map"></div>
    );
  }
}

export default Map
