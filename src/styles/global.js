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

  table {
    width: 100%;
    margin: 10px 0;
    border-collapse: separate;
    border-spacing: 0 15px;

    thead {
      text-align: left;

      th {
        opacity: 0.8;
      }
    }

    tbody {
      tr {
        background: #fff;
        border-radius: 10px;

        td:first-child { border-top-left-radius: 10px; }
        td:first-child { border-bottom-left-radius: 10px; }
        td:last-child { border-top-right-radius: 10px; }
        td:last-child{ border-bottom-right-radius: 10px; }

        td {
          padding: 10px 0;
          padding-left: 15px;
          background: transparent;
        }
      }


    }
  }

`;
