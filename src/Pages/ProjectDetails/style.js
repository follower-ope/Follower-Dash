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
