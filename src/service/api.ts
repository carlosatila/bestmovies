import axios from 'axios';
import { config as globalConfig } from '../config';

const api = axios.create({
  baseURL: globalConfig.baseUrl,
  headers: {'Content-Type': 'application/json'}
});

api.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    'api_key': globalConfig.apiKey,
    language: 'pt-BR',
    region: 'BR',
  };

  return config;
}, function (error) {
  return Promise.reject(error);
});

export default api;