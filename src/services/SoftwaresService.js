import api from './api';

export const GetSoftwares = async () => {
  const { data } = await api.get('/softwares');
  console.log(data);
  return data;
};
