import React from 'react';
import Error from '~/components/Error';

export default Wrapped => {
  function WithStatus(props) {
    let renderComponent;
    const { status, errorCode } = props;
    if (status === 'error' && errorCode) {
      renderComponent = <Error errorCode={errorCode} />;
    } else {
      renderComponent = <Wrapped {...props} />;
    }
    return renderComponent;
  }
  WithStatus.getInitialProps = ctx => {
    if (Wrapped.getInitialProps) {
      return Wrapped.getInitialProps(ctx);
    }
    return {};
  };
  return WithStatus;
};
