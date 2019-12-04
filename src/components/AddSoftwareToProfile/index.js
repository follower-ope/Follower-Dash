import React, { useState } from 'react';
import { errorMessage } from '../../services/Messages';
import { Button } from '../../styles/components';
import { Form } from './styles';

function AddSoftwareToProfile({ softwares, setSoftwareProductivity }) {
  const [processName, setProcessName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (processName) {
      setSoftwareProductivity(processName);
      setProcessName('');
    } else {
      errorMessage('Selecione um Software');
    }
  };
  const handleChangeSoftware = softwareId => {
    setProcessName(softwareId);
  };
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="software">
        <select
          name="software"
          value={processName}
          onChange={e => handleChangeSoftware(e.target.value)}
        >
          <option value="0">Selecione...</option>
          {softwares.map(software => (
            <option key={software.process_name} value={software.process_name}>
              {software.process_name}
            </option>
          ))}
        </select>
      </label>
      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default AddSoftwareToProfile;
