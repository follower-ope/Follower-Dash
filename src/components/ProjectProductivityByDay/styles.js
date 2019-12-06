import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const LoadContainer = styled.div`
  position: absolute;
  z-index: 1561;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgba(255, 255, 255, 0.8);
`;

export const DateTimeContainer = styled.div`
  padding-left: 20px;
  div {
    margin-top: 2px;
    margin-right: 3px;
  }

  input {
    cursor: pointer;
    width: 100px;
  }
`;
