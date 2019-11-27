import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  background: #fff;
  min-width: 300px;
  min-height: 300px;
  margin: 20px;

  div {
    width: 100%;
    height: 20%;
    padding: 20px;
    text-align: center;
  }
`;
