import Api, { setCookie } from './api';

export const login = data => Api.post('login/', { ...data });
export const tokenRefresh = req => Api.post('api/auth/refresh/', {}, setCookie(req));
export const tokenVerify = req => Api.post('api/auth/verify/', {}, setCookie(req));
export const getGoogleToken = code => Api.post('https://oauth2.googleapis.com/token', { ...code }, { baseUrl: '' });
