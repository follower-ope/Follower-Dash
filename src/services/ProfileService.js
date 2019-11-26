import api from './api';
import { errorMessage } from './Messages';

export const GetProfiles = async () => {
  try {
    const response = await api.get('/profile', {
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

export const GetProfile = async profileId => {
  try {
    const response = await api.get(`/profile/${profileId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return null;
  }
};
