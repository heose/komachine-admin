import React from 'react';

export default class About extends React.Component {
  static async getInitialProps() {
    console.log('About page');
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}
