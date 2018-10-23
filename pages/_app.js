import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'mobx-react';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAlignLeft, faLanguage, faCogs, faListAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'
import withStore from '../lib/with-mobx-store';


library.add(fab, faAlignLeft, faLanguage, faCogs, faListAlt, faSitemap);

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