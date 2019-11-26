import React, { useState, useEffect } from 'react';
import { Table } from '../../styles/components';
import { GetSoftwares } from '../../services/SoftwaresService';

function Softwares() {
  const [softwares, setSoftwares] = useState([]);

  const fetchSoftwares = async () => {
    setSoftwares(await GetSoftwares());
  };

  useEffect(() => {
    fetchSoftwares();
  }, []);

  const changeProductivity = (e, processName) => {
    const s = softwares[0];
    s.productive = e.target.checked;
    setSoftwares([s]);
  };

  return (
    <>
      <h1>Softwares</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Produtivo</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map(software => (
            <tr key={software.process_name}>
              <td>{software.name}</td>
              <td>
                <input
                  onChange={e => changeProductivity(e, software.process_name)}
                  type="checkbox"
                  checked={software.productive}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Softwares;
