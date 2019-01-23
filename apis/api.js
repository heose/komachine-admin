import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.komachine.com/' : 'http://localhost:8000/';

const Api = axios.create({
  baseURL,
  headers: {
    withCredentials: true,
    Accept: '*/*',
  },
  responseType: 'json',
});

Api.interceptors.response.use(res => (res.headers['content-type'] === 'application/json' ? res : Promise.reject(res)));

export default Api;
