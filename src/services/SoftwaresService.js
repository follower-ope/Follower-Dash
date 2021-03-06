import api from './api';
import { errorMessage } from './Messages';

export const GetSoftwares = async () => {
  try {
    const response = await api.get('/softwares', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return [];
  }
};

export const GetProfilesSoftware = async softwareId => {
  try {
    const response = await api.get(`/softwares/${softwareId}/profiles`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro');
    return null;
  }
};
