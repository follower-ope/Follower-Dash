import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GetProfile, GetProfileSoftwares } from '../../services/ProfileService';

function ProfileDetails({ match }) {
  const [profile, setProfile] = useState({});
  const [softwares, setSoftwares] = useState([]);

  const { id } = match.params;
  const fetchProfile = async () => {
    setProfile(await GetProfile(id));
  };

  const fetchSoftwares = async () => {
    setSoftwares(await GetProfileSoftwares(id));
  };

  useEffect(() => {
    fetchProfile();
    fetchSoftwares();
  }, []);

  return (
    <>
      <h1>{profile.description}</h1>
      <br />
      <div>
        <p>
          <b>Softwares produtivos</b>
        </p>
        {softwares.map(software => (
          <p>{software.software_id}</p>
        ))}
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
