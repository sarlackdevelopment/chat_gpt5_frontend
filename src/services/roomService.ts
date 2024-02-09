import { Observable } from '../observable/observable';
import { getRooms } from '../api/rooms';

export interface IRoom {
    id: string;
    name: string;
}

export const storeRoomService = {
    rooms: new Observable<IRoom[]>([])
};

class RoomService {
    // public setRoom = async ({ id, name }: IRoom) => {
    //     loginUser({ username, password }).then(() => storeAuthService.user.set({ username, password }));
    // }

    public getRooms = async () => {
        const rooms = await getRooms();
        storeRoomService.rooms.set(rooms);
    }
}

export const roomService = new RoomService();
