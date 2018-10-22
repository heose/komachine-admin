import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'mobx-react';
import 'normalize.css';
import withStore from '../lib/with-mobx-store';
import withGlobalStyle from '../lib/with-global-style';


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
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet" />
          <title>Komachine Admin</title>
        </Head>
        <Provider store={rootStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withGlobalStyle({
  style: {
    fontSize: '20px',
    fontFamily: 'Nanum Gothic, sans-serif'
  }
})(withStore(RootApp));