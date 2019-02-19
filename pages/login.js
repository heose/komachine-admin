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
      {/* <button type="button" onClick={submit}>
        login
      </button> */}
      <div>
        <a href="/auth/google">구글로 로그인</a>
      </div>
      <div>
        <a href="/auth/facebook">페이스북으로 로그인</a>
      </div>
    </div>
  );
}

Login.getInitialProps = props => {
  console.log(props);
  return {
    next: props.query.next,
  };
};

export default withLayout(DefaultLayout)(Login);
