import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UsersContent = styled.div`
  flex: 1;
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

export const ChartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(125, 110, 252, 0.19),
    0 6px 6px rgba(125, 110, 252, 0.23);
  max-height: 400px;
  background: #fff;
  border-radius: 8px;

  h1 {
    margin: 5px;
  }

  div {
    margin: auto 0;
  }
`;
