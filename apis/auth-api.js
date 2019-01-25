import Api from './api';

class AuthApi {
  login = data => Api.post('login/', { ...data });
  refresh = () => Api.post('api/auth/refresh/').then(res => res.status);
}

export default AuthApi;
