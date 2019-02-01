import React from 'react';
import withLayout from '~/lib/with-layout';
import DefaultLayout from '~/layouts/DefaultLayout';

class Index extends React.Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <div>
        <h1 className="title">Komachine Admin Home</h1>
        <h3>May be placing dashboard</h3>
      </div>
    );
  }
}

export default withLayout(DefaultLayout)(Index);
