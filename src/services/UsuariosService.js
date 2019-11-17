import api from './api';
import { errorMessage } from './Messages';

export const GetUsuarios = async () => {
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

export const SaveUsuario = async (username, name, email) => {
  try {
    const response = await api.post('/users', {
      username,
      name,
      email,
    });

    return response;
  } catch ({ response }) {
    errorMessage(response.data.error);
    return null;
  }
};
