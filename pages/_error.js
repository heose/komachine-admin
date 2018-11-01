import React from 'react';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </p>
    );
  }
}

export default withLayout(DefaultLayout)(Error);
