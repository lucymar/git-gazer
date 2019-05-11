import React, { Component } from 'react';
import Map from './Map';

function Locations(props) {
  return (
    <div>
      <h3 className="statement">
        This repo has been forked in the following locations:{' '}
      </h3>
      <div>
        <div className="container">
          {props.locations.map((city, index) => (
            <div className="city" key={index}>
              <p className="cities">{city}</p>
            </div>
          ))}
        </div>
      </div>
      >
      <Map />
    </div>
  );
}

export default Locations;
