import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const instance = axios.create<AxiosInstance>({
    baseURL: 'http://localhost:5094'
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        // Перенаправление
    }
    return Promise.reject(error);
});


export default instance;
