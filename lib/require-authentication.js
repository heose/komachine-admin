import has from 'lodash/has';
import AuthApi from '../apis/auth-api';

const authApi = new AuthApi();
export default (req, res, next) => {
  // next();
  if (has(req.cookies, 'access_token')) {
    next();
  }
  if (has(req.cookies, 'refresh_token')) {
    const status = authApi.refresh();
    if (status === 200) {
      next();
    }
  }
  if (req.path !== '/login') {
    res.redirect('/login');
  } else {
    next();
  }
};
