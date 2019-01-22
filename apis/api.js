import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.komachine.com/' : 'http://localhost:8000/';

const Api = axios.create({
  baseURL,
  headers: {
    withCredentials: true,
    'content-type': 'application/json',
  },
});

export default Api;
