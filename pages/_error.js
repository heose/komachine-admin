import React from 'react';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Error extends React.Component {
  static getInitialProps({res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {statusCode};
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default withLayout(DefaultLayout)(Error);