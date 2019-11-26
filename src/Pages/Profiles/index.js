import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetProfiles } from '../../services/ProfileService';
import { Table, Button } from '../../styles/components';
import { Title } from './styles';

function Profiles {
  const [profiles, setProfiles] = useState([]);
  const [creatingProfile, setCreatingProfile] = useState(false);

  useEffect(() => {
    async function fetchProfiles() {
      setProfiles(await GetProfiles());
    }
    fetchProfiles();
  }, []);

  const handleNewProfile = () => {
    return setCreatingProfile(true);
  };

  return (
    <>
      <Title>
        <h1>Perfils</h1>
        <Button type="button" onClick={() => handleNewProfile()}>
          Novo Perfil
        </Button>
      </Title>
      <Table>
        <thead>
          <tr>
            <th>Perfil</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.description}>
              <td>{profile.description}</td>
              <td>
                <Link to={`/usuario/${profile.description}`}>ver mais</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Profiles;
