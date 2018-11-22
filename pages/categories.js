import React from 'react';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Categories extends React.Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <div>
        <h1>Category</h1>
      </div>
    );
  }
}

export default withLayout(DefaultLayout)(Categories);
