import { Observable } from '../observable/observable';
import { loginUser } from '../api/auth';

export interface IUser {
    username?: string;
    password?: string;
}

export const storeAuthService = {
    user: new Observable<IUser>({})
};

class AuthService {
    public login = async ({ username, password }: IUser) => {
        await loginUser({ username, password });
        storeAuthService.user.set({ username, password })
    }
    public logout = () => {
        localStorage.removeItem('tokenGPT5');
        storeAuthService.user.set(null);
    }
}

export const authService = new AuthService();
