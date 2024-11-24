import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('viewer'); // Default role
    const navigate = useNavigate();
    const API_BASE = process.env.REACT_APP_API_BASE;

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE}/auth/register`, { username, password, role });
            alert('Registration successful! You can now log in.');
            navigate('/login'); // Redirect to login after signup
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300 p-4">
            <div className="bg-black rounded-lg shadow p-6 w-full max-w-sm">
                <h1 className="text-2xl text-center font-bold mb-4 text-white">Signup</h1>
                <form onSubmit={handleSignup}>
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
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="border p-2 mb-4 w-full"
                    >
                        <option value="viewer">Viewer</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
