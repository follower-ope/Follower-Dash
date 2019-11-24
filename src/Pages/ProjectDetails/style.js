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
