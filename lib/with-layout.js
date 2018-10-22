import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const withLayout = (Layout = DefaultLayout) => (Wrapped) => {
  return function (props) {
    return (
      <Layout {...props}>
        <Wrapped {...props} />
      </Layout>
    );
  };
};

export default withLayout;