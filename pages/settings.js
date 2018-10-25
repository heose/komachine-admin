import React from 'react';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';


class Settings extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
    return {}
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}

export default withLayout(DefaultLayout)(Settings);