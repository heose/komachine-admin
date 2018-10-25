import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }
  
  body {
    height: 100%;
    overflow: scroll;
    font-size: 1.4rem;
    font-family: Helvetica, Arial, sans-serif;
    & > div {
      height: 100%;
    }
  }
   
  .fonts-loaded {
    body {
      font-family: 'Nanum Gothic', Helvetica, Arial, sans-serif;
    }
  }
  
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
  
`;

export default GlobalStyle;