import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userData: any) => {
        setUser(userData);
        navigate('/chat');
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={ { user, login, logout } }>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
