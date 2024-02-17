import axios from './configuration/axios';

export const getRooms = async () => {
    try {
        const response = await axios.get('/ChatRoom/all');

        console.log('Получен список комнат', response.data);

        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка комнат:', error.response ? error.response.data : error.message);
    }
};

export const deleteRoom = async (roomId: string) => {
    try {
        const response = await axios.delete(`/ChatRoom/${roomId}`);
        console.log(`Комната ${roomId} успешно удалена`);
        return response.data;
    } catch (error) {
        console.error('Ошибка удаления комнаты:', error.response ? error.response.data : error.message);
    }
}

export const createRoom = async (roomName: string) => {
    try {
        const response = await axios.post('ChatRoom/create', {
            name: roomName,
            messages: [],
            users: []
        });
        console.log(`Комната ${roomName} успешно создана`);
        return response.data;
    } catch (error) {
        console.error('Ошибка создания комнаты:', error.response ? error.response.data : error.message);
    }
}

export const userRooms = async (userId: string) => {
    try {
        const response = await axios.get(`User/${userId}/rooms`);
        console.log(`Получен список комнат для пользователя ${userId}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка комнат:', error.response ? error.response.data : error.message);
    }
}
