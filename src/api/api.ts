import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from '@components/use-app/use-app.tsx';

const BaseUrl = 'https://13.design.pages.academy/wtw';
const RequestTimeout = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BaseUrl,
    timeout: RequestTimeout,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );
  return api;
};
