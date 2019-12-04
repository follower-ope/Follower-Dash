import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetSoftwares } from '../../services/SoftwaresService';
import {
  GetProfile,
  GetProfileSoftwares,
  SetSoftwareProfile,
  UpdateSoftwareProfile,
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
          return !softwares.filter(lol => {
            return lol.software_id === item.process_name;
          }).length;
        })
      );
    };
    if (softwares) {
      fetchSoftware();
    }
  }, [softwares]);

  const setSoftwareProductivity = async processName => {
    await SetSoftwareProfile({
      processName,
      profileId: profile.id,
    });

    fetchSoftwares();
  };

  const change = async software => {
    setSoftwares(
      softwares.map(item => {
        if (item.software_id === software.software_id) {
          return {
            ...item,
            is_productive: software.productive,
          };
        }
        return item;
      })
    );

    await UpdateSoftwareProfile({
      id: software.id,
      profileId: profile.id,
      processName: software.software_id,
      isProductive: software.productive,
    });
  };

  return (
    <>
      <Title>
        <h1>{profile.description}</h1>
        <Button
          type="button"
          onClick={() => setcreatingSoftwareProfile(!creatingSoftwareProfile)}
        >
          Cadastrar Software
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
          <b>Produtividade de Softwares</b>
        </p>
        <Table>
          <thead>
            <tr>
              <th>Software</th>
              <th>Produtivo</th>
            </tr>
          </thead>
          <tbody>
            {softwares &&
              softwares.map(software => (
                <tr key={software.software_id}>
                  <td>{software.software_id}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={software.is_productive}
                      onChange={e =>
                        change({
                          id: software.id,
                          software_id: software.software_id,
                          productive: e.target.checked,
                        })
                      }
                    />
                  </td>
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
