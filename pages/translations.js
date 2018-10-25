import React from 'react';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';


class Translations extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
    return {}
  }

  render() {
    return (
      <div>
        <h1>Translation</h1>
      </div>
    );
  }
}

export default withLayout(DefaultLayout)(Translations);