import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  background: #4938d4cc;
`;

export const Card = styled.div`
  background: #fff;
  flex: 1;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 2px 2px 15px #383434;

  h1 {
    text-align: center;
    font-size: 50px;
  }

  input {
    flex: 1;
    margin: 20px 10px;
    padding: 10px 20px;
    border-radius: 4px;
    border: 2px solid #4938d4cc;
  }

  button {
    border: 0;
    border-radius: 4px;
    background-color: #4938d4cc;
    padding: 20px 10px;
    color: #fff;
    font-size: 20px;
  }
`;
