import { Observable } from '../observable/observable';
import { createRoom, deleteRoom, getRooms, userRooms } from '../api/rooms';

export interface IRoom {
    id: string;
    name: string;
}

export const storeRoomService = {
    rooms: new Observable<IRoom[]>([]),
    userRooms: new Observable<IRoom[]>([])
};

class RoomService {
    public getRooms = async () => {
        const rooms = await getRooms();
        storeRoomService.rooms.set(rooms);
    }

    public deleteRoom = async (roomId: string) => {
        const rooms = await deleteRoom(roomId);
        storeRoomService.rooms.set(rooms);
    }

    public createRoom = async (roomName: string) => {
        const rooms = await createRoom(roomName);
        storeRoomService.rooms.set(rooms);
    }

    public getUserRooms = async (userId: string) => {
        const rooms = await userRooms(userId);
        storeRoomService.userRooms.set(rooms);
    }
}

export const roomService = new RoomService();
