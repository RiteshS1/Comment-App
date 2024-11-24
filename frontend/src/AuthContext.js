import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User will hold the user object with role

    const login = (userData) => {
    //  console.log('User data on login:', userData); 
        setUser(userData); // Set user data on login
        localStorage.setItem('token', userData.token); // Store token in local storage
    };

    const logout = () => {
        setUser(null); // Clear user data on logout
        localStorage.removeItem('token'); // Remove token from local storage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
