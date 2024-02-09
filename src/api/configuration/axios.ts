import axios, { AxiosInstance } from 'axios';
import { redirectToForbiddenPage, redirectToUnauthorizedPage } from './redirect';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const instance = axios.create<AxiosInstance>({
    baseURL: 'http://localhost:5094'
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('tokenGPT5');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        redirectToUnauthorizedPage();
    } else if (error.response && error.response.status === 403) {
        redirectToForbiddenPage();
    }
    return Promise.reject(error);
});


export default instance;
