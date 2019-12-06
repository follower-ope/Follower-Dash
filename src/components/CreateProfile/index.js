import React, { useState } from 'react';
import { SaveProfile } from '../../services/ProfileService';
import { Button } from '../../styles/components';
import { Form } from './styles';

function CreateProfile({ updateProfile }) {
  const [profile, setProfile] = useState({ description: '' });

  const handleChange = obj => {
    setProfile({ ...profile, ...obj });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const nProfile = await SaveProfile(profile);

    if (nProfile) {
      updateProfile(nProfile);
      setProfile({ description: '' });
    }
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="description">
        <input
          type="text"
          placeholder="Nome do Perfil"
          value={profile.description}
          onChange={e => handleChange({ description: e.target.value })}
        />
      </label>
      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default CreateProfile;
