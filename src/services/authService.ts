import { Observable } from '../observable/observable';
import { loginUser } from '../api/auth';

export interface IUser {
    username?: string;
    password?: string;
}

export const storeAuthService = {
    user: new Observable<IUser>({}),
    currentUserId: new Observable<string>('')
};

class AuthService {
    public login = async ({ username, password }: IUser) => {
        const currentUser = await loginUser({ username, password });
        storeAuthService.user.set({ username, password });
        storeAuthService.currentUserId.set(currentUser.userId);
    }
    public logout = () => {
        localStorage.removeItem('tokenGPT5');
        storeAuthService.user.set(null);
    }
}

export const authService = new AuthService();
