import api from './api';
import { errorMessage } from './Messages';

export const GetProjetos = async () => {
  try {
    const response = await api.get('/projects', {
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

export const CreateProject = async (title, description, time) => {
  try {
    const response = await api.post(
      '/projects',
      {
        title,
        description,
        time,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    return response.data;
  } catch ({ response }) {
    errorMessage(response.data.error);
    return null;
  }
};
