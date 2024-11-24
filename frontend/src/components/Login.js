import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const API_BASE = process.env.REACT_APP_API_BASE;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE}/auth/login`, { username, password });
           // console.log('Login response:', response.data);
            login({ username, token: response.data.token, role: response.data.role, id: response.data.id });
            navigate('/'); 

        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300 p-4">
            <div className="bg-black rounded-lg shadow p-6 w-full max-w-sm">
                <h1 className="text-2xl text-white text-center font-bold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
