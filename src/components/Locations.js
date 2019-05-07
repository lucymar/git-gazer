import React, { Component } from 'react';
import Map from './Map';

function Locations(props) {
  return (
    <div>
      <h3 className="statement">This repo has been forked in: </h3>
      <div className="container">
        <ul>
          {props.locations.map((city, index) => (
            <div key={index}>
              <li className="cities">{city}</li>
            </div>
          ))}
        </ul>
      </div>
      <Map />
    </div>
  );
}

export default Locations;
