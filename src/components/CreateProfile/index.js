import React, { useState } from 'react';
import { SaveProfile } from '../../services/ProfileService';

function CreateProfile({ updateProfile }) {
  const [profile, setProfile] = useState({ description: '' });

  const handleChange = obj => {
    setProfile({ ...profile, ...obj });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const nProfile = SaveProfile(profile);

    if (nProfile) {
      updateProfile(profile);
      setProfile({ description: '' });
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="description">
        Nome
        <input
          type="text"
          value={profile.description}
          onChange={e => handleChange({ description: e.target.value })}
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default CreateProfile;
