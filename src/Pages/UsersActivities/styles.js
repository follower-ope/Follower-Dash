import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 35px;

  button.btn {
    border: 0;
    border-radius: 3px;
    background: #5d4afbcc;
    color: #fff;
    height: 100%;
    width: 31px;
  }

  div.react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    margin: 0 7px;

    div {
      height: 100%;

      input {
        height: 100%;
        text-align: center;
        width: 100px;
      }
    }
  }
`;
