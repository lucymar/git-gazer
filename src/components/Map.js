import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibHVjeW1hciIsImEiOiJjanQ0ajFoeWMwZDEwNDRwaGlwM2F3M3A2In0.uHXTEtSC78BHunbaDzaDFA';
class Map extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      pins: null,
    };
  }

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.handleViewportChange({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  render() {
    return (
      <ReactMapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          ref={this.mapRef}
          onViewportChange={this.handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </ReactMapGL>
    );
  }
}
export default Map;
