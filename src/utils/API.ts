import { CK_JWT_TOKEN } from '@/states/common.state';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

interface RequestConfig {
  url: string;
  baseUrl?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: any;
  headers?: Record<string, unknown>;
}

interface UploadConfig {
  file?: File | null;
  headers?: Record<string, unknown>;
}

export const API = {
  request: (config: RequestConfig) => {
    const { baseUrl = import.meta.env.VITE_API_DOMAIN, method = 'GET', url, params, headers } = config;
    const token = Cookies.get(CK_JWT_TOKEN);
    const requestConfig: AxiosRequestConfig = {
      url: `${baseUrl}${url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers
      },
      data: ['POST', 'PATCH', 'PUT'].includes(method) ? params : undefined,
      params: method === 'GET' ? params : undefined,
      timeout: 20000,
      timeoutErrorMessage: 'Hệ thống không phản hồi. Vui lòng thử lại sau!'
    };

    return axios(requestConfig)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        const { status } = e?.response || {};
        if (status === 401) {
          Cookies.remove(CK_JWT_TOKEN);
          // localStorage.removeItem(CK_JWT_TOKEN);
          window.location.reload();
          return;
        }
        return Promise.reject(e?.response?.data || e);
      });
  },

  upload: (config: UploadConfig) => {
    const { headers, file } = config;

    const token = Cookies.get(CK_JWT_TOKEN);
    // const token = localStorage.getItem(CK_JWT_TOKEN);

    if (!file) {
      return Promise.resolve(null);
    }

    const formData = new FormData();

    formData.append('file', file);

    const requestConfig: AxiosRequestConfig = {
      url: `${import.meta.env.VITE_API_DOMAIN}/upload`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers
      },
      data: formData,
      timeout: 20000,
      timeoutErrorMessage: 'Hệ thống không phản hồi. Vui lòng thử lại sau!'
    };

    return axios(requestConfig)
      .then((response) => {
        return response.data as string;
      })
      .catch((e) => {
        return Promise.reject(e?.response?.data || e);
      });
  }
};
