import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  min-height: 100%;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  overflow-y: scroll;
  flex: 1;
  padding: 25px;
`;

export const Table = styled.table`
  width: 100%;
  margin: 10px 0;
  border-collapse: separate;
  border-spacing: 0 15px;

  thead {
    text-align: left;

    th {
      opacity: 0.8;
    }
  }

  tbody {
    tr {
      background: #fff;
      border-radius: 10px;

      td:first-child {
        border-top-left-radius: 10px;
      }
      td:first-child {
        border-bottom-left-radius: 10px;
      }
      td:last-child {
        border-top-right-radius: 10px;
      }
      td:last-child {
        border-bottom-right-radius: 10px;
      }

      td {
        padding: 10px 0;
        padding-left: 15px;
        background: transparent;

        .faded {
          opacity: 0.4;
        }
      }
    }
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 3px;
  background: #5d4afbcc;
  color: #fff;
  padding: 10px;
`;

export const ChartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  box-shadow: 0 10px 20px rgba(125, 110, 252, 0.19),
    0 6px 6px rgba(125, 110, 252, 0.23);
  max-height: 400px;
  background: #fff;
  border-radius: 8px;
  /* margin: 15px; */
  margin: 6px;

  &.full {
    width: 100%;
    height: 300px;
    margin: 15px 0;
  }

  h1 {
    margin: 5px;
  }
`;
