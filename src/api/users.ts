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

export const joinUserToRoom = async (userId: string, roomId: string) => {
    try {
        const response = await axios.post(`/User/${userId}/joinRoom/${roomId}`);
        console.log(`Пользователь присоединился к комнате ${roomId}`, response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка присоединения пользователя к комнате:',
            error.response ? error.response.data : error.message);
    }
}

export const leaveRoom = async (userId: string, roomId: string) => {
    try {
        const response = await axios.post(`/User/${userId}/leaveRoom/${roomId}`);
        console.log(`Пользователь отсоединился от комнаты ${roomId}`, response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка отсоединения пользователя от комнаты:',
            error.response ? error.response.data : error.message);
    }
}
