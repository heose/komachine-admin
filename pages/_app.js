// pages/_app.js
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/with-redux-store'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Head>
          <title>Komachine Admin</title>
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}