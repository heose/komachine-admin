/* eslint-disable no-console */
const axios = require('axios');
const has = require('lodash/has');

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
module.exports = async (req, res, next) => {
  if (req.path.includes('/_next') || req.path.includes('/favicon.ico')) {
    return next();
  }
  // const err401 = new Error('occur 403');
  // // err401.statusCode = 403;
  // return next(err401);
  console.log('path', req.path);
  console.log('cookies', req.cookies);
  if (req.path === '/login') {
    if (has(req.cookies, 'access_token')) {
      return res.redirect('/');
    }
    return next();
  }
  if (has(req.cookies, 'access_token')) {
    return next();
  }
  if (has(req.cookies, 'refresh_token')) {
    const { headers } = req || {};
    const { cookie } = headers || {};
    const response = await Api.post('api/auth/refresh/', {}, { headers: { cookie } });
    console.log('status', response.status);
    if (response.status === 200) {
      console.log(response);
      // res.set('Set-cookie', response.headers['set-cookie']);
      return next();
    }
  }
  return res.redirect('/login');
};
