import { Observable } from '../observable/observable';
import { getUsers, addUser } from "../API/users";

export const storeUsersService = {
    users: new Observable([]),
    loadingUserList: new Observable(false),
    errorUserList: new Observable(''),
    loadingNewUser: new Observable(false),
    errorNewUser: new Observable(''),
    currentUser: new Observable('')
};

class UsersService {
    setUsers = async () => {
        storeUsersService.loadingUserList.set(true);
        try {
            const users = await getUsers();
            storeUsersService.users.set(users);
            storeUsersService.currentUser.set(users?.[0]);
        } catch (error) {
            storeUsersService.errorUserList.set(error.message);
        } finally {
            storeUsersService.loadingUserList.set(false);
        }
    }
    addUser = async (data) => {
        storeUsersService.loadingNewUser.set(true);
        try {
            await addUser(data);
            const users = await getUsers();
            storeUsersService.users.set(users);
        } catch (error) {
            storeUsersService.errorNewUser.set(error.message);
        } finally {
            storeUsersService.loadingNewUser.set(false);
        }
    }
    setActivate = (id) => {
        const currentUser = storeUsersService.users.get().find((user) => user.id === id);
        storeUsersService.currentUser.set(currentUser)
    }
}

export const usersService = new UsersService();
