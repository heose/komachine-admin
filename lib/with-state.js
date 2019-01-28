import React from 'react';
import get from 'lodash/get';
import Error from 'components/Error';

export default (completeValue = 'complete', stateKey = 'state') => Wrapped =>
  class extends React.Component {
    static getInitialProps(ctx) {
      if (Wrapped.getInitialProps) {
        return Wrapped.getInitialProps(ctx);
      }
      return {};
    }
    render() {
      let renderComponent;
      const state = get(this.props, stateKey);
      if (state === completeValue) {
        renderComponent = <Wrapped {...this.props} />;
      } else {
        renderComponent = <Error statusCode="123" />;
      }
      return renderComponent;
    }
  };
