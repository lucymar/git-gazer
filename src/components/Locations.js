import React, { Component } from 'react';

function Locations(props) {
  return (
    <div>
      <h3 className="statement">This repo has been forked in: </h3>
      <div className="container">
        {props.locations.map((city, index) => (
          <div key={index}>
            <p className="cities">{city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
