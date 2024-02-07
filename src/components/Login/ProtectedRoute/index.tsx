import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }: { component: any, allowedRoles: any }) => {
    const { user } = useAuth();

    return (
        user && allowedRoles.includes(user.role) ? <Component { ...rest } /> : <Navigate to="/" />
    );
};

export default ProtectedRoute;
