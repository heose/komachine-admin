import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import Greeting from '../components/Greeting';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default class extends React.Component {
  static async getInitialProps({req, res, pathname, query}) {
    // console.log('index page');
    // console.log(req);
    // console.log(res);
    // console.log(pathname);
    // console.log(query);
    return {};
  }

  render() {
    return (
      <div style={{'height': '900px'}}>
        <Title>
          Hello World
        </Title>
        <Greeting/>
        <div>
          Click{' '}
          <Link href={{pathname: '/about', query: {name: 'Zeit'}}}>
            <a>here</a>
          </Link>{' '}
          to read more
        </div>
        <div>
          <Link prefetch href="/companies" >
            <a>Companies</a>
          </Link>
        </div>
        <div>
          <Link scroll={false} href="/?counter=10"><a>Disables scrolling</a></Link>
        </div>
        <div>
          <Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
        </div>
        <div>
          Click <span onClick={() => Router.push('/about')}>here</span> to read more
        </div>
      </div>
    );
  }
}