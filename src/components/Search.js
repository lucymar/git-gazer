import React, { Component } from 'react';
import { Map1 } from './Map';
// import axios from 'axios'
import Loading from './Loading';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      repo: '',
      locationData: {},
      clicked: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
  //suggestions method???
  //  getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data,
  //                            // as does axios. So... data.data
  //       })
  //     })
  // }

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    //make query to apollo client
    this.setState({
      clicked: true,
    });
    //here: fetch fork lists and locations, then render the Map component passing in locations
  }

  render() {
    return (
      <div>
        <ApolloConsumer>
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
            <button className="button" type="button">
              Search
            </button>
          </form>

          {this.state.clicked && this.state.locationData.name ? (
            <Map1 user={this.state.user} repo={this.state.repo} />
          ) : (
            <Loading />
          )}
        </ApolloConsumer>
      </div>
    );
  }
}

export default Search;
