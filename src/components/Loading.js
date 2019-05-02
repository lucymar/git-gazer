import Loader from 'react-loader-spinner';
import React from 'react';

export default class Loading extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        className="loading"
        type="Ball-Triangle"
        color="#00BFFF"
        height="50"
        width="50"
      />
    );
  }
}
