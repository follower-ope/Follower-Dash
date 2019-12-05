import React, { useState, useEffect } from 'react';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';

function SoftwareDetails({ match }) {
  const [process, setProcess] = useState('');
  const [perfis, setPerfis] = useState([]);
  const [creatinProfile, setCreatingProfile] = useState(false);

  useEffect(() => {
    const { processName } = match.params;
    setProcess(processName);
  });

  useEffect(() => {}, []);
  return (
    <>
      <Title>
        <h1>{process}</h1>
        <Button
          type="button"
          onClick={() => setCreatingProfile(!creatinProfile)}
        >
          Cadastrar Perfil
        </Button>
      </Title>
      {creatinProfile && <p>criando</p>}
      <div>
        <p>
          <b>Produtividade de Perfis</b>
        </p>
        <Table>
          <thead>
            <tr>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            {perfis &&
              perfis.map(perfil => (
                <tr>
                  <td>{perfil}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default SoftwareDetails;
