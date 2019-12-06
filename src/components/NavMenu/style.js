import styled from 'styled-components';

export const Content = styled.div`
  height: 80px;
  justify-content: flex-end;
  padding-right: 20px;
  background: #5d4afbcc;
  display: flex;
  align-items: center;
  color: #fff;

  button {
    margin: 20px;
    background: white;
    border: 0;
    padding: 7px 8px;
    font-size: 16px;
    display: flex;
    border-radius: 5px;
    color: #7b6cfa;
  }

  @media (max-width: 700px) {
    height: 40px;
  }
`;
