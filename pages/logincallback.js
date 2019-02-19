import React from 'react';
import withLayout from '~/lib/with-layout';
import DefaultLayout from '~/layouts/DefaultLayout';
import { getGoogleToken } from '~/apis/auth-api';
import axios from 'axios';
import querystring from 'querystring';
import qs from 'qs';

function Logincallback() {
  return <div>login call back</div>;
}

Logincallback.getInitialProps = props => {
  console.log('logincallback');
  console.log(props.query.code);
  const data = {
    code: props.query.code,
    client_id: '136758333281-sl43ob96tu44qeemdkh0evu3miavgfs2.apps.googleusercontent.com',
    client_secret: 'YrhMIgGANcibbcZe210DlIGH',
    redirect_uri: 'http://localhost:3000/logincallback',
    grant_type: 'authorization_code',
  };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  console.log(data);
  axios
    .post('https://www.googleapis.com/oauth2/v4/token', qs.stringify(data), config)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  return {};
};

export default withLayout(DefaultLayout)(Logincallback);
