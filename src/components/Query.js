import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_USER_LOCATIONS = gql`
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
