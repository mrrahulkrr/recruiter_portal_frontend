import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getJobs = () => api.get('/jobs');
export const getJob = (id) => api.get(`/jobs/${id}`);
export const createJob = (job) => api.post('/jobs', job);
export const updateJob = (id, job) => api.put(`/jobs/${id}`, job);
export const deleteJob = (id) => api.delete(`/jobs/${id}`);
export const applyForJob = (jobId, formData) => api.post(`/jobs/${jobId}/apply`, formData);
export const getApplicants = (jobId) => api.get(`/jobs/${jobId}/applicants`);

export default api;