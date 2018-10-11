import Link from 'next/link';
import React from 'react';
import Page from '../components/Page'


export default class About extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
    console.log('about page');
    console.log(query);
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // return { userAgent }
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
