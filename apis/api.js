import axios from 'axios';
import get from 'lodash/get';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.komachine.com/' : 'http://localhost:8000/';
export const setCookie = (req, config = {}) => {
  const cookie = get(req, 'headers.cookie');
  if (cookie) {
    config.headers = { cookie };
  }
  return config;
};
const Api = axios.create({
  baseURL,
  headers: {
    Accept: '*/*',
  },
  withCredentials: true,
  responseType: 'json',
});
// Api.interceptors.request.use(config => {
//   console.log(config);
//   return config;
// });
// Api.interceptors.response.use(res => (res.headers['content-type'] === 'application/json' ? res : Promise.reject(res)));
Api.interceptors.response.use(res => (res.headers['content-type'] === 'application/json' ? res : Promise.reject(res)));

export default Api;
