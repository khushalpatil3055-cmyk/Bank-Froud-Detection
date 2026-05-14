import API from './config';

export const getStats = () => API.get('/admin/stats');
export const getAlerts = () => API.get('/admin/alerts');
export const updateAlert = (id, status) => API.put(`/admin/alerts/${id}`, { status });
export const getUsers = () => API.get('/admin/users');
export const updateUser = (id, status) => API.put(`/admin/users/${id}`, { status });
export const getAllTransactions = () => API.get('/transactions/all');
export const getYearlyStats = () => API.get('/admin/yearly-stats'); 
export const getTodayStats = () => API.get('/admin/today-stats');    
export const getMonthStats = () => API.get('/admin/month-stats');    