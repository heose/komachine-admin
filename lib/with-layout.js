import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

export default (Layout = DefaultLayout, extraProps) => Wrapped =>
  class extends React.Component {
    static getInitialProps(ctx) {
      if (Wrapped.getInitialProps) {
        return Wrapped.getInitialProps(ctx);
      }
      return {};
    }
    render() {
      return (
        <Layout {...this.props} {...extraProps}>
          <Wrapped {...this.props} />
        </Layout>
      );
    }
  };
