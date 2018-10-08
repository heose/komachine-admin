import Link from 'next/link';
import React from 'react';
import Page from '../components/Page'


export default class About extends React.Component {

  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render() {
    return (
      <div>
        <p>Welcome to About!!!</p>
        <Page title='About Page' linkTo='/other' />
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
