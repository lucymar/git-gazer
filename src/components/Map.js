import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

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

// // const GET_DATA = gql`
// //   {
// //     repository(owner: "facebook", name: "create-react-app") {
// //       forks(last: 5) {
// //         edges {
// //           node {
// //             owner {
// //               login
// //               ... on User {
// //                 location
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;

// // export const Map1 = ({ onLocationGot }) => (
// //   <Query query={GET_DATA}>
// //     {({ loading, error, data }) => {
// //       if (loading) return 'loading...';
// //       if (error) return `Error! ${error.message}`;
// //       console.log('this is being sentn from the map component', data);
// //       return <div>data goes here</div>;
// //     }}
// //   </Query>
// // );

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibHVjeW1hciIsImEiOiJjanQ0ajFoeWMwZDEwNDRwaGlwM2F3M3A2In0.uHXTEtSC78BHunbaDzaDFA';

// export const MyMap = new mapboxgl.Map({
//   container: 'map',
//   center: [0, 0], //
//   zoom: 0, // starting zoom
//   style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
// });

// export default MyMap;
