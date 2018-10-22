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
      <div style={{'height': '900px'}}>
        <h1 className="title">
          Hello World {this.props.title}
        </h1>
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

const enhance = compose(withProps({}), withLayout(DefaultLayout));
export default enhance(Index);