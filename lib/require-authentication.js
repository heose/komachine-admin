// import has from 'lodash/has';
const has = require('lodash/has');
// import AuthApi from '../apis/auth-api';

// const authApi = new AuthApi();
module.exports = (req, res, next) => {
  const dev = process.env.NODE_ENV !== 'production';
  const host = dev ? 'http://localhost:8000' : 'https://www.komachine.com';
  console.log(req.cookies);
  if (!has(req.cookies, 'access_token')) {
    if (has(req.cookies, 'refresh_token')) {
      res.redirect('/login');
    } else {
      res.redirect('/login');
    }
  } else {
    next();
  }
};
