import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetSoftwares } from '../../services/SoftwaresService';
import {
  GetProfile,
  GetProfileSoftwares,
  SetSoftwareProfile,
} from '../../services/ProfileService';
import AddSoftwareToProfile from '../../components/AddSoftwareToProfile';

function ProfileDetails({ match }) {
  const [profile, setProfile] = useState({});
  const [SoftwaresToAdd, setSoftwaresToAdd] = useState([]);
  const [softwares, setSoftwares] = useState([]);
  const [creatingSoftwareProfile, setcreatingSoftwareProfile] = useState(false);

  const { id } = match.params;

  const fetchSoftwares = async () => {
    setSoftwares(await GetProfileSoftwares(id));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setProfile(await GetProfile(id));
    };

    fetchProfile();
    fetchSoftwares();
  }, []);

  useEffect(() => {
    const fetchSoftware = async () => {
      const sft = await GetSoftwares();

      setSoftwaresToAdd(
        sft.filter(item => {
          return !softwares.includes(item.process_name);
        })
      );
    };
    fetchSoftware();
  }, [softwares]);

  const setSoftwareProductivity = async processName => {
    await SetSoftwareProfile({
      processName,
      profileId: profile.id,
    });

    fetchSoftwares();
  };

  return (
    <>
      <Title>
        <h1>{profile.description}</h1>
        <Button
          type="button"
          onClick={() => setcreatingSoftwareProfile(!creatingSoftwareProfile)}
        >
          Novo Usuario
        </Button>
      </Title>
      {creatingSoftwareProfile && (
        <AddSoftwareToProfile
          softwares={SoftwaresToAdd}
          setSoftwareProductivity={setSoftwareProductivity}
        />
      )}
      <div>
        <p>
          <b>Softwares produtivos</b>
        </p>
        <Table>
          <thead>
            <tr>
              <th />
            </tr>
          </thead>
          <tbody>
            {softwares.map(software => (
              <tr key={software.software_id}>
                <td>{software.software_id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ProfileDetails;

ProfileDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
