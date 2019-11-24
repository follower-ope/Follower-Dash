import api from './api';
import { errorMessage, successMessage } from './Messages';

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

export const GetUser = async username => {
  try {
    const response = await api.get(`/users/${username}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data[0];
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
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return null;
  }
};

export const ChangeUserProject = async (username, projectId) => {
  try {
    await api.put(
      `/users/${username}`,
      {
        project_id: projectId,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    const message = `${
      projectId ? 'Adicionado usuario no' : 'Removido usuario do'
    }  projeto com sucesso`;

    successMessage(message);
    return true;
  } catch ({ response }) {
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return false;
  }
};
