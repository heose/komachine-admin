import React from 'react';
import {initializeStore} from '../stores/RootStore';

const isServer = typeof window === 'undefined';
const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    console.log('');
    console.log('');
    console.log('###########isServer###########');
    console.log(initialState);
    console.log('###########isServer###########');
    console.log('');
    console.log('');
    return initializeStore(initialState);
  }
  console.log('$#######################3');
  console.log(window[__NEXT_MOBX_STORE__]);
  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_MOBX_STORE__];
}

export default (App) => {
  return class AppWithMobx extends React.Component {
    static async getInitialProps(appContext) {
      console.log('2');
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const rootStore = getOrCreateStore();
      console.log('with-mobx-store', rootStore);

      // Provide the store to getInitialProps of pages
      appContext.ctx.rootStore = rootStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }

      return {
        ...appProps,
        initialStoreState: rootStore,
      };
    }

    constructor(props) {
      super(props);
      console.log('1');
      this.rootStore = getOrCreateStore(props.initialStoreState);
    }

    render() {
      return <App {...this.props} rootStore={this.rootStore}/>;
    }
  };
}