import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Search from './Search';
import DelayedQuery from './Test';
import TestSearch from './TestSearch';
import { Map1 } from './Map';
import { API_KEY } from './localSecrets';

console.log('hiiiii', process.env.GITHUB_TOKEN);

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${API_KEY}`,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    a
    <div id="map">
      <h2 id="header">git-gazer</h2>
      <h4 className="description">
        Mapping out the power of open-source collaboration… one fork at a time!
      </h4>
      <TestSearch />
      <Map1 />
    </div>
  </ApolloProvider>
);

export default App;
