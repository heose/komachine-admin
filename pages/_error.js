import React from 'react';
import ErrorComponent from 'components/Error';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const errStatusCode = err ? err.statusCode : null;
    const errorCode = res ? res.statusCode : errStatusCode;
    return { errorCode };
  }

  render() {
    return <ErrorComponent {...this.props} />;
  }
}

export default withLayout(DefaultLayout)(Error);
