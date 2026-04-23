import API from './config';

export const makeTransaction = (data) => API.post('/transactions/send', data);
export const getMyTransactions = () => API.get('/transactions/my');