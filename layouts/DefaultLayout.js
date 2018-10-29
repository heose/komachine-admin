import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import NormalizeCSS from './normalize.css';
import GlobalStyle from './global-style';


export const Div = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
  height: auto;
`;

export const Central = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  min-height: 500px;
  overflow: scroll;
`;

export const Page = styled.div`
  flex: 1 1 auto;
  background-color: #f0f0f7;
  padding: 10px 0 20px 20px;
`;

const DefaultLayout = ({children}) => {
  return (
    <Div>
      <NormalizeCSS/>
      <GlobalStyle/>
      <Header/>
      <Central>
        <Nav/>
        <Page>
          {children}
        </Page>
      </Central>
      <Footer/>
    </Div>
  )
};

export default DefaultLayout;