import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

class DelayedQuery extends Component {
  state = { locations: null };

  onDataGotten = cities => this.setState(() => ({ locations: cities }));

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.locations && <h1>{this.state.locations}</h1>}
            <button
              className="button"
              onClick={async () => {
                const { data } = await client.query({
                  query: gql`
                    {
                      repository(owner: "facebook", name: "create-react-app") {
                        forks(last: 5) {
                          edges {
                            node {
                              owner {
                                login
                              }
                            }
                          }
                        }
                      }
                    }
                  `,
                  // variables: { breed: "bulldog" }
                });
                console.log('DAAAAATTAAAA', data);
                this.onDataGotten(data.locations);
              }}
            >
              Click me!
            </button>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default DelayedQuery;
