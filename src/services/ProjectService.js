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

    const responseUsersProject = await api.get(`/projects/${projectId}/users`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    const responseProfileProject = await api.get(
      `/projectProfileProductivity/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    const responseProductivity = await api.get(
      `/projectProductivity/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    const project = {
      ...responseProject.data,
      users: responseUsersProject.data,
      profiles: responseProfileProject.data.profiles,
      productivity: responseProductivity.data,
    };

    return project;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return [];
  }
};

export const SaveProject = async project => {
  try {
    const response = await api.post('/projects', project, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    return response.data;
  } catch ({ response }) {
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return null;
  }
};

export const GetProductivityByDate = async (projectId, startDate, endDate) => {
  try {
    const response = await api.post(
      `/projectProductivityByDay/${projectId}`,
      {
        startDate,
        endDate,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );
    return response.data;
  } catch ({ response }) {
    console.log(response);
  }
};
