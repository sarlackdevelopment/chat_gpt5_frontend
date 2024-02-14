import { Observable } from '../observable/observable';
import { getUsers, getUsersByRoom } from '../api/users';

export interface IUser {
    id: string;
    username: string;
}

export const storeUserService = {
    users: new Observable<IUser[]>([]),
    usersByRoom: new Observable<IUser[]>([])
};

class UserService {
    public getUsers = async () => {
        const users = await getUsers();
        storeUserService.users.set(users)
    }

    public getUsersByRoom = async (roomId: string) => {
        const users = await getUsersByRoom(roomId);
        storeUserService.usersByRoom.set(users);
    }
}

export const userService = new UserService();
