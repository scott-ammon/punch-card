import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Link} from "react-router-dom";

class Map extends React.Component {

  componentDidMount() {
    let restaurantsArray = this.props.restaurants;
    mapboxgl.accessToken = this.props.mapboxKey;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/scottammon/cjjfwon001qvd2rthricow465',
      center: [-122, 47.5],
      zoom: 7
    });

    var thisMap = this.map

    // empty array to hold each mapboxgl marker
    var markerArray = [];

    var test = function(e) {
      e.preventDefault()
      console.log("Success")
    }

    // add all projects to map on main get route to '/map'
    restaurantsArray.forEach(function(restaurant) {
      var marker = new mapboxgl.Marker()
      .setLngLat([restaurant.lng, restaurant.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML("<button onclick='{console}'>" + restaurant.name +"</button>"))
      .addTo(thisMap);
      markerArray.push(marker);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className="map" id="map" ref={el => this.mapContainer = el}></div>
      </div>
    );
  }
}

export default Map
