import React, { useState, useEffect } from 'react';

const Softwares = () => {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    setSoftwares([
      { name: 'software 1', isProdutive: true },
      { name: 'software 2', isProdutive: false },
    ]);
  }, []);

  return (
    <>
      <h1>Softwares</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome de usuario</th>
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
            <th>Nome de usuario</th>
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
