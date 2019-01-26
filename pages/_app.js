import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { dom } from '@fortawesome/fontawesome-svg-core';
import 'lib/font-awesome';
import 'lib/fonts';
import makeStore from '../redux/store';

class RootApp extends App {
  static async getInitialProps({ Component, ctx, ...props }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    Router.push('/');
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
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

export default withRedux(makeStore)(withReduxSaga({ async: true })(RootApp));
