import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	withCredentials: true,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": "true",
	},
});

export default api;

