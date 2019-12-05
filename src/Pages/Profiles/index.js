import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetProfiles } from '../../services/ProfileService';
import { Table, Button } from '../../styles/components';
import { Title } from './styles';
import CreateProfile from '../../components/CreateProfile';

function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [creatingProfile, setCreatingProfile] = useState(false);

  useEffect(() => {
    async function fetchProfiles() {
      setProfiles(await GetProfiles());
    }
    fetchProfiles();
  }, []);

  const updateProfile = profile => {
    setProfiles([...profiles, profile]);
  };

  return (
    <>
      <Title>
        <h1>Perfis</h1>
        <Button
          type="button"
          onClick={() => setCreatingProfile(!creatingProfile)}
        >
          Novo Perfil
        </Button>
      </Title>

      <div>
        {creatingProfile && <CreateProfile updateProfile={updateProfile} />}
      </div>

      <Table>
        <thead>
          <tr>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.description}>
              <td>
                <Link to={`/profile/${profile.id}`}>{profile.description}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Profiles;
