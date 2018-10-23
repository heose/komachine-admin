import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Footer from '../components/Footer';


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    height: 100%;
    overflow: scroll;
    font-size: 1.4rem;
    font-family: 'Nanum Gothic', sans-serif;
    & > div {
      height: 100%;
    }
  }
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
  height: auto;
`;

const Central = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  min-height: 500px;
`;

const Page = styled.div`
  flex: 1 0 auto;
  background-color: #f0f0f7;
  padding: 10px 0 20px 20px;
`;

const DefaultLayout = ({children}) => {
  return (
    <Div>
      <GlobalStyle />
      <Header />
      <Central>
        <Nav />
        <Page>
          {children}
        </Page>
      </Central>
      <Footer />
    </Div>
  )
};

export default DefaultLayout;