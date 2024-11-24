import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const API_BASE = process.env.REACT_APP_API_BASE;
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(`${API_BASE}/admin/users`);
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, newRole) => {
        await axios.put(`${API_BASE}/admin/users/${userId}`, { role: newRole });
        setUsers(users.map(user => (user._id === userId ? { ...user, role: newRole } : user)));
    };

    const toggleActiveStatus = async (userId, isActive) => {
        await axios.put(`${API_BASE}/admin/users/${userId}`, { isActive: !isActive });
        setUsers(users.map(user => (user._id === userId ? { ...user, isActive: !isActive } : user)));
    };

    const back = function getback(){
        navigate('/');
    }

    return (
        
        <div className="min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border-b">{user.username}</td>
                            <td className="py-2 px-4 border-b">
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    className="border p-1"
                                >
                                    <option value="viewer">Viewer</option>
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 border-b">{user.isActive ? 'Active' : 'Inactive'}</td>
                            <td className="py-2 px-4 border-b">
                                <button onClick={() => toggleActiveStatus(user._id, user.isActive)} className="bg-blue-500 text-white p-1 rounded">
                                    {user.isActive ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="bg-blue-500 mt-5 text-white p-1 rounded" onClick={back}>Homepage</button>
        </div>
    );
};

export default AdminDashboard;
