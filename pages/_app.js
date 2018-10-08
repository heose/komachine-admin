import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'mobx-react'
import withMobxStore from '../lib/with-mobx-store'


class RootApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps, mobxStore} = this.props;
    return (
      <Container>
        <Head>
          <title>Komachine Admin</title>
        </Head>
        <Provider store={mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withMobxStore(RootApp);