import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './Loading';
import { Query } from 'react-apollo';
import Map from 'mapbox-gl';
const mapboxgl = require('mapbox-gl');
//const buildMarker = require('./marker.js');

const GET_DATA = gql`
  {
    repository(owner: "facebook", name: "create-react-app") {
      forks(last: 5) {
        edges {
          node {
            owner {
              login
              ... on User {
                location
              }
            }
          }
        }
      }
    }
  }
`;

// //with variables:
// // const user = this.props.user;
// // const repo = this.props.repo;

// const GET_DATA_With_VARIABLES = gql`
//   {
//     repository(owner: "facebook", name: "create-react-app") {
//       forks(last: 5) {
//         edges {
//           node {
//             owner {
//               login
//               ... on User {
//                 location
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const Map1 = ({ onLocationGot }) => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return `Error! ${error.message}`;
      console.log('this is being sentn from the map component', data);
      return <div>data goes here</div>;
    }}
  </Query>
);

mapboxgl.accessToken =
  'pk.eyJ1IjoibHVjeW1hciIsImEiOiJjanQ0ajFoeWMwZDEwNDRwaGlwM2F3M3A2In0.uHXTEtSC78BHunbaDzaDFA';

export const MyMap = new mapboxgl.Map({
  container: 'map',
  center: [0, 0], //
  zoom: 0, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

export default MyMap;
