import axios from 'axios';
import {retrieveData} from '../storage/storage';

const api = axios.create({
  baseURL: 'https://9713356zii.execute-api.eu-west-1.amazonaws.com/dev',
});

api.interceptors.request.use(
  async config => {
    const authToken = await retrieveData('token');
    if (authToken) {
      config.headers['x-api-key'] = authToken;
    }
    //console.log('API Request:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    // console.log('API Response:', response.data);
    return response;
  },
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

export default api;
