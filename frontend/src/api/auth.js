import API from './config';

export const loginUser = (data) => API.post('/auth/login', data);
export const signupUser = (data) => API.post('/auth/signup', data);
export const getProfile = () => API.get('/auth/profile');
