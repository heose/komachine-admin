import React from 'react';
import Router from 'next/router';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';
import AuthApi from '../apis/auth-api';

const api = new AuthApi();
function Login({ next }) {
  const submit = () => {
    const res = api.login({ email: 'heose@komachine.com', password: '' });
    console.log(res);
    if (next) {
      Router.push(next);
    } else {
      Router.push('/');
    }
  };
  return (
    <div>
      Login Page
      <button type="button" onClick={submit}>
        next
      </button>
    </div>
  );
}

Login.getInitialProps = ({ query }) => ({
  next: query.next,
});

export default withLayout(DefaultLayout)(Login);
