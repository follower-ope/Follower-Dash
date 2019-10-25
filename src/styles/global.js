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

  table {
    width: 100%;
    padding: 20px;
    text-align: center;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 1px 3px 5px -1px black;

    td {
      padding:10px;
      border-bottom: 1px solid black;
    }
  }

`;
