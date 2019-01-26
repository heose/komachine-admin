import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.komachine.com/' : 'http://localhost:8000/';

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
Api.interceptors.response.use(res => (res.headers['content-type'] === 'application/json' ? res : Promise.reject(res)));

export default Api;
