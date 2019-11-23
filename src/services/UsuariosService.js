import api from './api';
import { errorMessage } from './Messages';

export const GetUsers = async () => {
  try {
    const response = await api.get('/users', {
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

export const GetUsersIncomplete = async () => {
  try {
    const response = await api.get('/usersIncomplete', {
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

export const SaveUser = async user => {
  try {
    const response = await api.post('/users', {
      username: user.username,
      name: user.name,
      email: user.email,
    });

    return response.data;
  } catch ({ response }) {
    errorMessage(response.data.error);
    return null;
  }
};
