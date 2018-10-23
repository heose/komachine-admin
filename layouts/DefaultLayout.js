import React from 'react';
import Header from 'components/Header';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
    font-family: 'Nanum Gothic', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

const DefaultLayout = ({title='Default Layout', children}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>{title}</h1>
      {children}
    </div>
  )
};

export default DefaultLayout;