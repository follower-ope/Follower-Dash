import axios from 'axios';

const api = axios.create({
  baseURL: 'https://followerapi.herokuapp.com',
});

export default api;
