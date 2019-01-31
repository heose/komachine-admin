/* eslint-disable no-console */
import React from 'react';
import Router from 'next/router';
import has from 'lodash/has';
import { tokenRefresh, tokenVerify } from '../apis/auth-api';

const verifyAccessToken = async (req, res) => {
  let refreshed = false;
  const verified = await tokenVerify(req)
    .then(response => {
      if (res && has(response.headers, 'set-cookie')) {
        res.set('Set-cookie', response.headers['set-cookie']);
        refreshed = true;
      }
      return response.status === 200;
    })
    .catch(() => false);
  return [verified, refreshed];
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
      const [verified, refreshed] = await verifyAccessToken(req, res);
      if (isLoginPage && verified) {
        shouldRedirect = true;
        redirectUrl = '/';
      } else if (!isLoginPage && !verified) {
        shouldRedirect = true;
        redirectUrl = loginUrl;
      } else if (isServer && refreshed) {
        shouldRedirect = true;
        redirectUrl = req.url;
      }

      if (shouldRedirect) {
        if (isServer) {
          res.writeHead(302, { Location: redirectUrl });
          res.end();
        } else {
          Router.push(redirectUrl);
        }
      } else if (Wrapped.getInitialProps) {
        return Wrapped.getInitialProps(ctx);
      }
      return {};
    }

    render() {
      return <Wrapped {...this.props} />;
    }
  };
