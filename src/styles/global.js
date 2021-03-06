import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
    background: #f3f3f3;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #3b00ca;
  }

  select {
    background: #fff;
    border-radius: 2px;
    border: 1px solid #7b6cfa;
    margin-top: 4px;
    padding: 3px;
  }
`;
