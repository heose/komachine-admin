import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { dom } from '@fortawesome/fontawesome-svg-core';
import '~/lib/font-awesome';
import '~/lib/fonts';
import withAuth from '~/lib/with-auth';
import makeStore from '~/redux/store';

class RootApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,800" rel="stylesheet" />
          <style>{dom.css()}</style>
          <title>Komachine Admin</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

// export default withAuth(withRedux(makeStore)(withReduxSaga({ async: true })(RootApp)));
export default withRedux(makeStore)(withReduxSaga({ async: true })(RootApp));
