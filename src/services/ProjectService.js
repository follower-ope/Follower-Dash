import api from './api';
import { errorMessage } from './Messages';

export const GetProjects = async () => {
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

export const GetProjectDetails = async projectId => {
  try {
    const responseProject = await api.get(`/projects/${projectId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    const responseUsersProject = await api.get(`/projectUsers/${projectId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    const project = {
      ...responseProject.data,
      users: responseUsersProject.data,
    };

    return project;
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
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return null;
  }
};
