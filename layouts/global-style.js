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
    font-family: Arial, serif;
    //font-family: 'Nanum Gothic', sans-serif;
    & > div {
      height: 100%;
    }
  }
  
  .fonts-loaded {
    body {
      font-family: 'Nanum Gothic', sans-serif;
      //font-size: 1.4rem;
    }
  }
  
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
  
`;

export default GlobalStyle;