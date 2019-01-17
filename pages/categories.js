import React from 'react';
import Router from 'next/router';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Categories extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/companies',
      });
      res.end();
    } else {
      Router.push('/companies');
    }
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
