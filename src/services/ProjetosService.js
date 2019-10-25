import api from './api';

export const GetProjetos = async () => {
  const { data } = await api.get('/projects');
  console.log(data);
  return data;
};

export const CreateProject = async (title, description, time) => {
  try {
    const response = await api.post('/projects', {
      title,
      description,
      time,
    });

    console.log(response);
  } catch (e) {
    alert('err');
  }
};
