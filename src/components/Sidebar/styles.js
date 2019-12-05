import styled from 'styled-components';

export const Container = styled.aside`
  width: 170px;
  min-width: 170px;
  background: #5d4afbcc;
  transition: width 0.5s;

  header {
    position: relative;
    height: 80px;
    font-size: 32px;
    padding: 20px;
    color: #fff;
    background: #4938d4cc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    span {
      height: 100%;
      width: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }
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
      padding: 20px 9px;
      font-size: 18px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }

    .active p {
      background: #110098cc;
    }
  }

  @media (max-width: 700px) {
    width: 60px;
    min-width: 60px;

    span {
      display: none;
    }

    header {
      height: 20px;
    }
  }
`;
