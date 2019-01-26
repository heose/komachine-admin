import React from 'react';
import Router from 'next/router';

export default Wrapped => {
  function withAuth(props) {
    return <Wrapped {...props} />;
  }
  withAuth.getInitialProps = ctx => {
    console.log(ctx);
    const { req, res, asPath, router } = ctx.ctx;
    console.log('asPath', asPath);
    console.log(asPath === '/companies');
    if (asPath === '/companies') {
      if (res) {
        console.log('isServer');
        res.writeHead(302, {
          Location: '/',
        });
        res.end();
      } else {
        console.log('client');
        console.log(req);
        Router.push('/');
      }
    }
    if (Wrapped.getInitialProps) {
      return Wrapped.getInitialProps(ctx);
    }
    return {};
  };
  return withAuth;
};
