import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoibHVjeW1hciIsImEiOiJjanQ0ajFoeWMwZDEwNDRwaGlwM2F3M3A2In0.uHXTEtSC78BHunbaDzaDFA'
        }
        onViewportChange={viewport => this.setState({ viewport })}
        className="map"
      />
    );
  }
}
export default Map;
