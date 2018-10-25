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
      // FOUT때문에 일단 시스템폰트사용, 
      // 타이포그라피 vs 사용성(FOUT, FOIT 없음)
      // 어드민사이트는 타이포그라피보단 사용성이 우선이라고 판단
      //font-family: 'Nanum Gothic', Helvetica, Arial, sans-serif;
    }
  }
  
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    //color: inherit;
  }
  
`;

export default GlobalStyle;