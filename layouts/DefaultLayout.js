import React from 'react';
import Header from 'components/Header';

const DefaultLayout = ({title='Default Layout', children}) => {
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      {children}
    </div>
  )
};

export default DefaultLayout;