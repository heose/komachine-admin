import Link from 'next/link';
import React from 'react';
import Page from '../components/Page'


export default class About extends React.Component {
  static async getInitialProps(props) {
    console.log('index page');
    console.log(props);
    return {a: 'aaaa'}
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // return { userAgent }
  }

  render() {
    return (
      <div>
        <p>Welcome to About!!!{this.props.a}</p>
        <Page title='About Page' linkTo='/other' />
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
