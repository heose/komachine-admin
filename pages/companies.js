import Link from 'next/link';
import React from 'react';
import Page from '../components/Page'


export default class Companies extends React.Component {

  static getInitialProps (props) {
    console.log(props);
    return { }
  }

  render() {
    return (
      <div>
        <p>Companies Page</p>
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
