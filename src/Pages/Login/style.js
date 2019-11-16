import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  background: #4938d4cc;
`;

export const Card = styled.div`
  background: #fff;
  flex: 1;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 2px 2px 15px #383434;

  h1 {
    text-align: center;
    font-size: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      flex: 1;
      margin: 20px 10px;
      padding: 10px 20px;
      border-radius: 4px;
      border: 2px solid #4938d4cc;
    }

    button {
      border: 0;
      border-radius: 4px;
      background-color: #4938d4cc;
      padding: 20px 10px;
      color: #fff;
      font-size: 20px;

      svg {
        -webkit-animation: rotating 2s linear infinite;
        -moz-animation: rotating 2s linear infinite;
        -ms-animation: rotating 2s linear infinite;
        -o-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
      }
    }

    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  @media (max-width: 500px) {
    height: 100%;
    max-width: 100%;
    width: 100%;
  }
`;
