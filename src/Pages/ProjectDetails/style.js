import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  &.marginTop {
    margin-top: 15px;
  }

  li {
    button {
      padding: 3px 7px;
      margin-left: 5px;
    }
  }

  div.react-dropdown-select {
    background: #fff !important;
  }

  button {
    margin: 0 10px;
  }
`;

export const ButtonsContent = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;

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

  @keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  @-webkit-keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export const Form = styled.form`
  margin: 10px 0;
  display: flex;

  label {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
  }

  input,
  select {
    border-radius: 2px;
    border: 1px solid #7b6cfa;
    margin-top: 4px;
    padding: 3px;
  }
`;

export const PieChartLoading = styled.div`
  width: 200px;
  height: 200px;
  margin: 31px;
  border-radius: 50%;
  color: transparent;

  h1 {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
`;

export const TextLoading = styled.div`
  width: 14%;
  color: transparent;

  h1 {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    margin-bottom: 15px;
  }

  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
`;

export const TableLoading = styled.div`
  width: 100%;
  color: transparent;

  div.line {
    width: 100%;
    height: 15px;
    margin-bottom: 10px;

    animation: wave 1s infinite linear forwards;
    -webkit-animation: wave 1s infinite linear forwards;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #e2e2e2 18%, #eeeeee 33%);
    background-size: 800px 104px;
  }
`;
