import api from './api';

export const GetUsuarios = async () => {
  const { data } = await api.get('/users');
  return data;
};

export const SaveUsuario = async (username, name, role = 1) => {
  try {
    const response = await api.post('/users', {
      userName: username,
      name,
      role,
    });

    return response;
  } catch (e) {
    alert('err');
  }
};
