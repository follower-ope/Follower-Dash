import React, { useState, useEffect } from 'react';
import { GetSoftwares } from '../../services/SoftwaresService';

const Softwares = () => {
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
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Produtivo</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map(software => (
            <tr>
              <td>{software.name}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h5>Softwares ainda não classificado</h5>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Produtivo</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map(software => (
            <tr>
              <td>{software.name}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Softwares;
