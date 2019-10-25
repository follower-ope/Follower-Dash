import api from './api';

export const GetUsuarios = async () => {
  const { data } = await api.get('/users');
  console.log(data);
  return data;
};

export const SaveUsuario = async (username, name, email, role = 1) => {
  try {
    const response = await api.post('/users', {
      username,
      name,
      email,
      password_hash: 'default',
      profile_id: 1,
      project_id: 1,
    });
    console.log(response);
    return response;
  } catch (e) {
    alert('err');
  }
};
