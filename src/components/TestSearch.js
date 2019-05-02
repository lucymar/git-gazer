import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import Map1 from './Map';

const GET_USER_LOCATIONS = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      forks(last: 50) {
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

class TestSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: null,
      user: '',
      repo: '',
      clicked: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDataGotten = city =>
    this.setState({
      locations: this.state.locations,
      city,
    });

  // onDataGotten = cities =>
  //   this.setState(() => ({ locations: this.state.locations, cities }));

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit(evt) {
    //evt.preventDefault();
    //make query to apollo client
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div>
        <form className="searchComponent">
          <input
            className="search"
            placeholder="User"
            name="user"
            value={this.state.user}
            onChange={this.handleInputChange}
          />
          <input
            className="search"
            name="repo"
            value={this.state.repo}
            placeholder="repository"
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>

          <ApolloConsumer>
            {client => (
              <div>
                <button
                  className="button"
                  type="button"
                  onClick={async () => {
                    const { data } = await client.query({
                      query: GET_USER_LOCATIONS,
                      variables: {
                        owner: this.state.user,
                        name: this.state.repo,
                      },
                      fetchPolicy: 'no-cache',
                    });
                    console.log('data locations', data.repository.forks.edges);
                    const usersArray = data.repository.forks.edges;
                    usersArray.map(user => {
                      if (user.node.owner.location)
                        console.log('location', user.node.owner.location);
                      if (user.node.owner.location)
                        this.onDataGotten(user.node.owner.location);
                    });

                    this.handleSubmit();
                  }}
                >
                  Search
                </button>
              </div>
            )}
          </ApolloConsumer>
        </form>
        {/* {
          this.state.clicked === true ? <Map1 locations={this.state.locations}/>
        } */}
      </div>
    );
  }
}

export default TestSearch;