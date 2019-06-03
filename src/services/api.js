import { Platform, AsyncStorage } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: Platform.select({
    ios: 'http://localhost:3333',
    android: 'http://10.0.3.2:3333',
  }),
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@AdotandoPet:token');
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
