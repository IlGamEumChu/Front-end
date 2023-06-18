// // RootProvider.tsx에서 호출

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const setStorage = (accessToken: string) => {
  AsyncStorage.setItem('accessToken', accessToken);
};

export const defaultAxios = async () => {
  axios.defaults.baseURL = 'http://3.38.126.3/';
  axios.defaults.withCredentials = false;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  let token = await AsyncStorage.getItem('accessToken');
  token = token ?? '';
  axios.defaults.headers.Authorization = token;
  console.log('defaultAxios');
};
