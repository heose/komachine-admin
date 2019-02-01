import React from 'react';
import Router from 'next/router';
import withLayout from '~/lib/with-layout';
import DefaultLayout from '~/layouts/DefaultLayout';
import { login } from '~/apis/auth-api';

function Login({ next }) {
  const submit = () => {
    login({ email: 'heose@komachine.com', password: 'magic140715' }).then(response => {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    });
    // if (next) {
    //   Router.push(next);
    // } else {
    //   Router.push('/');
    // }
  };
  return (
    <div>
      Login Page
      <button type="button" onClick={submit}>
        login
      </button>
    </div>
  );
}

Login.getInitialProps = ({ query }) => ({
  next: query.next,
});

export default withLayout(DefaultLayout)(Login);
