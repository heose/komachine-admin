import React from 'react';
import Error from 'components/Error';

export default Wrapped => {
  function WithStatus(props) {
    let renderComponent;
    const { status, errorCode } = props;
    if (status === 'request' || status === 'complete') {
      renderComponent = <Wrapped {...props} />;
    } else {
      renderComponent = <Error errorCode={errorCode} />;
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
