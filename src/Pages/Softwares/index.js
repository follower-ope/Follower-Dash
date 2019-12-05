import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <h1>Softwares</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map(software => (
            <tr key={software.process_name}>
              <td>
                <Link to={`/software/${software.process_name}`}>
                  {software.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Softwares;
