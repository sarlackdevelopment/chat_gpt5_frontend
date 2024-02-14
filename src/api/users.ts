import axios from './configuration/axios';

export const getUsers = async () => {
    try {
        const response = await axios.get('/User/users');
        console.log('Получен список пользователей', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка пользователей:', error.response ? error.response.data : error.message);
    }
};

export const getUsersByRoom = async (roomId: string) => {
    try {
        const response = await axios.get(`/ChatRoom/${roomId}/users`);
        console.log(`Получен список пользователей по комнате ${roomId}`, response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка пользователей:', error.response ? error.response.data : error.message);
    }
}
