import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetProfilesSoftware } from '../../services/SoftwaresService';
import {
  GetProfiles,
  SetSoftwareProfile,
  UpdateSoftwareProfile,
} from '../../services/ProfileService';

function SoftwareDetails({ match }) {
  const [process, setProcess] = useState('');
  const [profilesToAdd, setProfilesToAdd] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [creatinProfile, setCreatingProfile] = useState(false);

  useEffect(() => {
    const { processName } = match.params;
    setProcess(processName);
  });

  useEffect(() => {
    if (!process) return;

    const fetchProfiles = async () => {
      setProfiles(await GetProfilesSoftware(process));
    };
    fetchProfiles();
  }, [process]);

  useEffect(() => {
    if (!profiles.length) return;
    console.log(profiles);
    const fetchProfiles = async () => {
      const pro = await GetProfiles();

      setProfilesToAdd(
        pro.filter(p => !profiles.filter(pr => pr.Profile.id === p.id).length)
      );
    };
    fetchProfiles();
  }, [profiles]);

  const setProfileToSoftware = async profileId => {
    await SetSoftwareProfile({
      profileId,
      processName: process,
    });
  };

  const RemoveProfileSoftware = async profileId => {
    await UpdateSoftwareProfile({
      profileId,
      processName: process,
      isProductive: false,
    });
  };

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
      {creatinProfile && (
        <div>
          <Select
            options={profilesToAdd.map(u => {
              return { label: u.description, value: u.id };
            })}
            value={profilesToAdd}
            onChange={values => setProfileToSoftware(values[0].value)}
            placeholder="Selecione..."
          />
        </div>
      )}
      <div>
        <p>
          <b>Produtividade de Perfis</b>
        </p>
        <Table>
          <thead>
            <tr>
              <th>Perfil</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {profiles &&
              profiles.map(profile => (
                <tr>
                  <td>{profile.Profile.description}</td>
                  <td>
                    <Button
                      type="button"
                      onClick={() => RemoveProfileSoftware(profile.Profile.id)}
                    >
                      Remover
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default SoftwareDetails;
