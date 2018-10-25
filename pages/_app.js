import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'mobx-react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import '../lib/font-awesome';
import '../lib/fonts';
import withStore from '../lib/with-mobx-store';

class RootApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps, rootStore} = this.props;
    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,800" rel="stylesheet" />
          <style>
            {dom.css()}
          </style>
          <title>Komachine Admin</title>
        </Head>
        <Provider store={rootStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withStore(RootApp);