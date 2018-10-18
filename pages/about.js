import Link from 'next/link';
import React from 'react';


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
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
