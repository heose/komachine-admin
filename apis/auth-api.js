import Api from './api';

class AuthApi {
  login = data => Api.post('login/', { ...data }).then(res => res);
}

export default AuthApi;
