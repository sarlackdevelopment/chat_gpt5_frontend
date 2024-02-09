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
