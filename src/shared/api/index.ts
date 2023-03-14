import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
	withCredentials: true,
});

api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const errorCode = error.response?.status;
		const originalRequest = error.config;

		if (
			errorCode === 401 &&
			!originalRequest._retry &&
			error.response.data.message === 'Token has expired'
		) {
			originalRequest._retry = true;
			api.get('/auth/refresh');
			return api(originalRequest);
		}
		return Promise.reject(error);
	},
);

export default api;
