import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-scde.herokuapp.com',
});

export default api;
