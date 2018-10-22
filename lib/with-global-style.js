import React from 'react';
import styled from 'styled-components';


const GlobalStyled = styled.div.attrs({
  style: ({fontSize, backgroundColor}) => ({
    fontSize,
    backgroundColor,
  })
})`
  font-size: 20px;
`;

export default ({style}) => (App) => {
  return class AppWithGlobalStyle extends React.Component {
    static async getInitialProps(appContext) {
      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }
      return appProps;
    }

    render() {
      return (
        <GlobalStyled style={{...style}}>
          <App {...this.props} />
        </GlobalStyled>
      )
    }
  }
}