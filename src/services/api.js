import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-backend-scde.herokuapp.com',
});

export default api;
