import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Search from './Search';
import Map from './Map';
import { API_KEY } from './localSecrets';
import SimpleExample from './leafletMap';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${API_KEY}`,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <div id="map">
      <h2 id="header">git-gazer</h2>
      <h4 className="description">
        Mapping out the power of open-source collaboration… one fork at a time!
      </h4>
      <Search />
      <Map />
    </div>
  </ApolloProvider>
);

export default App;
