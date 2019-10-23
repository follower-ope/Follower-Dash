import api from './api';

export const GetProjetos = async () => {
  const { data } = await api.get('/projects');
  return data;
};

export const CreateProject = async (name, time) => {
  try {
    const response = await api.post('/projects', {
      name,
      time,
    });
    console.log(response);
  } catch (e) {
    alert('err');
  }
};
