import React, { createContext, FC, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, IUser, storeAuthService } from '../../services/authService';
import { useObservable } from '../../observable/useObservable';

const AuthContext = createContext(null);

interface IProps {
    children: ReactNode;
}

export const AuthProvider: FC<IProps> = ({ children }) => {
    const user = useObservable(storeAuthService.user);
    const navigate = useNavigate();

    const login = (userData: IUser) => {
        authService.login(userData);
        navigate('/chat');
    };

    const logout = () => {
        authService.logout();
        navigate('/');
    };

    return (
        <AuthContext.Provider value={ { user, login, logout } }>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
