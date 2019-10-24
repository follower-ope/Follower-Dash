import React, { useEffect } from 'react';

const DetalhesProjeto = props => {
  useEffect(() => {
    const { id } = props.match.params;
    console.log(id);
  }, []);

  return (
    <>
      <h1>sddsds</h1>
    </>
  );
};

export default DetalhesProjeto;
