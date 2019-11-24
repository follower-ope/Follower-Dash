import React, { useEffect } from 'react';

import { Container } from './styles';

function Dashboards() {
  useEffect(() => {}, []);

  const handleclick = () => {};

  return (
    <Container>
      <button type="button" onClick={() => handleclick()}>
        asd
      </button>
      <h1>Dashboards</h1>
      <div />
    </Container>
  );
}

export default Dashboards;
