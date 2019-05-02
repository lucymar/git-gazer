import React, { Component } from 'react';

class Repo extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.repo.name} ({this.props.repo.author})
        </div>
      </div>
    );
  }
}

export default Repo;

// const GET_REPO = gql`
//     {

//     }

// `;

// const Repo1 = ({ onRepoFound }) => (
//   <Query query={GET_REPO}>
//     {({ loading, error, data }) => {
//       if (loading) return 'Loading...';
//       if (error) return `Error! ${error.message}`;

//       return (
//         <select name="repo" onChange={onRepoFound}>
//           {data.dogs.map(dog => (
//             <option key={dog.id} value={dog.breed}>
//               {dog.breed}
//             </option>
//           ))}
//         </select>
//       );
//     }}
//   </Query>
// );
