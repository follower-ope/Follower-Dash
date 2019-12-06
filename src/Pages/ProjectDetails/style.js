import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  li {
    button {
      padding: 3px 7px;
      margin-left: 5px;
    }
  }

  div.react-dropdown-select {
    background: #fff !important;
  }

  button {
    margin: 0 10px;
  }
`;

export const ButtonsContent = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;

  button {
    flex: 1;
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 18px;
    border: 0;
    cursor: pointer;

    &.selected {
      color: #fff;
      background: #7b6cfa;
    }
  }
`;

export const UsersContent = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(125, 110, 252, 0.19),
    0 6px 6px rgba(125, 110, 252, 0.23);

  ul li {
    list-style: none;
    margin: 10px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 6;
`;

export const Form = styled.form`
  margin: 10px 0;
  display: flex;

  label {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
  }

  input,
  select {
    border-radius: 2px;
    border: 1px solid #7b6cfa;
    margin-top: 4px;
    padding: 3px;
  }
`;
