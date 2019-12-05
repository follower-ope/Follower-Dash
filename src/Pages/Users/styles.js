import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;

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
