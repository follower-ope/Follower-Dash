import styled from 'styled-components';

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
