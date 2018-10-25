import React from 'react';


export default class About extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
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
