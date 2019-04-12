import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body,
  #root {
    height: 100%;  
  }
  
  body {
    background-image: linear-gradient(to right, #f88a1a, #F55F5E);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;