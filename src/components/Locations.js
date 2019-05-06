import React, { Component } from 'react';

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
    </div>
  );
}

export default Locations;
