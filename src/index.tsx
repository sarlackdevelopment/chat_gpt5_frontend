import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { AuthProvider } from './components/Login/useAuth';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
