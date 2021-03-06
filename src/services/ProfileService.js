import api from './api';
import { errorMessage, successMessage } from './Messages';

export const SaveProfile = async profile => {
  try {
    const response = await api.post(`/profile`, profile, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    successMessage('Perfil criado com sucesso');
    return response.data;
  } catch ({ response }) {
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return null;
  }
};

export const GetProfiles = async () => {
  try {
    const response = await api.get('/profile', {
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

export const GetProfile = async profileId => {
  try {
    const response = await api.get(`/profile/${profileId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return null;
  }
};

export const GetProfileSoftwares = async profileId => {
  try {
    const response = await api.get(`/profilesSoftwares/${profileId}`, {
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

export const SetSoftwareProfile = async ({
  profileId,
  processName,
  isProductive = true,
}) => {
  try {
    await api.post(
      '/profilesSoftwares',
      {
        profile_id: profileId,
        process_name: processName,
        is_productive: isProductive,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    return true;
  } catch (err) {
    errorMessage('Ocorreu um erro ao classificar Software');
    return false;
  }
};

export const UpdateSoftwareProfile = async ({
  id,
  profileId,
  processName,
  isProductive = true,
}) => {
  try {
    await api.put(
      `/profilesSoftwares/${id}`,
      {
        profile_id: profileId,
        process_name: processName,
        is_productive: isProductive,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }
    );

    successMessage('Alterado classificação com sucesso');
    return true;
  } catch (err) {
    errorMessage('Ocorreu um erro ao classificar Software');
    return false;
  }
};
