import styled from 'styled-components';

export const Container = styled.aside`
  width: 200px;
  background: #5d4afbcc;

  header {
    box-shadow: -1px -1px 6px #000;
    position: relative;
    height: 80px;
    font-size: 32px;
    padding: 20px;
    color: #fff;
    background: #4938d4cc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    ul li.active {
      background: #110098cc;
    }

    ul li a {
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    p {
      padding: 20px;
    }

    .active p {
      background: #110098cc;
    }
  }
`;
