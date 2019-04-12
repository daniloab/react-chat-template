import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    height: 100%;  
  }
  
  body {
    background-image: linear-gradient(to right, #f88a1a, #F55F5E);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  .d__flex {
    display: flex;
  }
  
  .m__sent {
    justify-content: flex-end;
    text-align: right;
  }
  .m__received {
    justify-content: flex-start;
    text-align: left;
  }
  
  .m {
    position: relative;
    padding: 20px 10px;
    border-radius: 55px;
    color: black;
  }
  
  .m--sent {
    background-color: lightblue;
    margin: 0px 25px 5px 5px;
  }
  
  .m--received {
    background-color: lightgreen;
    margin: 0px 5px 5px 5px;
  }
`;

export default GlobalStyle;