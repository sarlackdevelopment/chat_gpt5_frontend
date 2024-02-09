import axios from './configuration/axios';
import { IUser } from '../services/authService';

export const loginUser = async ({ username, password }: IUser) => {
    try {
        const response = await axios.post('/User/login', {
            username,
            password
        });

        console.log('Авторизация успешна:', response.data);
        localStorage.setItem('tokenGPT5', response.data.token);

        return response.data;
    } catch (error) {
        console.error('Ошибка авторизации:', error.response ? error.response.data : error.message);
    }
};
