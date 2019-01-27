/* eslint-disable no-console */
import React from 'react';
import Router from 'next/router';
import { tokenRefresh, tokenVerify } from '../apis/auth-api';

const verifyAccessToken = async req => {
  const verified = await tokenVerify(req)
    .then(response => response.status === 200)
    .catch(() => false);
  return verified;
};

const executeRefreshToken = async (req, res) => {
  const refreshed = await tokenRefresh(req)
    .then(response => {
      if (res) {
        res.set('Set-cookie', response.headers['set-cookie']);
      }
      return response.status === 200;
    })
    .catch(() => false);
  return refreshed;
};

export default Wrapped =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      const { req, res, asPath } = ctx.ctx;
      const loginUrl = '/login';
      const isLoginPage = asPath === loginUrl;
      const isServer = !process.browser;
      let shouldRedirect = false;
      let redirectUrl = loginUrl;
      const verified = await verifyAccessToken(req);
      if (isLoginPage && verified) {
        shouldRedirect = true;
        redirectUrl = '/';
      } else if (!isLoginPage && !verified) {
        const refreshed = await executeRefreshToken(req, res);
        if (!refreshed) {
          shouldRedirect = true;
          redirectUrl = loginUrl;
        }
      }

      if (shouldRedirect) {
        if (isServer) {
          res.writeHead(302, { Location: redirectUrl });
          res.end();
        } else {
          Router.push(redirectUrl);
        }
      } else if (Wrapped.getInitialProps) {
        try {
          return Wrapped.getInitialProps(ctx);
        } catch (e) {
          console.log('??');
          console.log(e);
        }
      }
      return {};
    }

    render() {
      return <Wrapped {...this.props} />;
    }
  };
