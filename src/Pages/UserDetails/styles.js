import styled from 'styled-components';

export const Form = styled.form`
  margin: 10px 0;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  .FormGroup {
    display: flex;
    margin: 10px 0;

    .group {
      flex: 1;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  input,
  select {
    border-radius: 2px;
    border: 1px solid #7b6cfa;
    margin-top: 4px;
    padding: 3px;
  }
`;

export const ChartContent = styled.div`
  background: #fff;
`;
