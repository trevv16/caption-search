import axios from 'axios';
import Auth from '../utils/Auth';
import { SERVER_BASE_URL } from '../Config';

const API = `${SERVER_BASE_URL}`;

function headers() {
  const token = Auth.getToken();
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`
  };
}

function queryString(params: any) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

function fetch(url: string, params = {}) {
  return axios.get(`${API}/${url}${queryString(params)}`, {
    headers: headers()
  });
}

export default {
  fetch(url: string, params = {}) {
    return fetch(url, params);
  },

  upload(verb: any, url: string, data: any) {
    switch (verb.toLowerCase()) {
      case 'post':
        return axios.post(`${API}/${url}`, data, { headers: headers() });
      case 'put':
        return axios.put(`${API}/${url}`, data, { headers: headers() });
      case 'patch':
        return axios.patch(`${API}/${url}`, data, { headers: headers() });
      default:
        return axios.post(`${API}/${url}`, data, { headers: headers() });
    }
  },

  post(url: string, data: any) {
    return axios.post(`${API}/${url}`, data, { headers: headers() });
  },

  put(url: string, data: any) {
    return axios.put(`${API}/${url}`, data, { headers: headers() });
  },

  patch(url: string, data: any) {
    return axios.patch(`${API}/${url}`, data, { headers: headers() });
  },

  delete(url: string) {
    return axios.delete(`${API}/${url}`, { headers: headers() });
  }
};
