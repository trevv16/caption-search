import axios from 'axios';

function queryString(params: any) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

function fetch(url: string, params = {}) {
  return axios.get(`${url}${queryString(params)}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetch(url: string, params = {}) {
    return fetch(url, params);
  }
};
