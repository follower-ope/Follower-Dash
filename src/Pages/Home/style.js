import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  margin: 20px;
  flex: 1;
  cursor: pointer;

  &.blue {
    background: #242498;
  }

  &.green {
    background: #1ba71b;
  }

  &.red {
    background: #cc2020;
  }

  &.orange {
    background: #ec9f10;
  }

  div {
    width: 100%;
    height: 20%;
    padding: 20px;
    text-align: center;
    color: #fff;
  }
`;
