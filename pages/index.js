import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';
import { compose, withProps } from 'recompose';


class Index extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
    return {};
  }

  render() {
    return (
      <div>
        <h1 className="title">
          Komachine Admin Home{this.props.title}
        </h1>
        <h3>
          May be placing dashboard
        </h3>
      </div>
    );
  }
}

const enhance = compose(withProps({}), withLayout(DefaultLayout));
export default enhance(Index);