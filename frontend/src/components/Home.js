import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Home = () => {
    const [comments, setComments] = useState([]);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComments = async () => {
            const API_BASE = process.env.REACT_APP_API_BASE;
            //console.log("API_BASE:", API_BASE); 
            try {
                if (!API_BASE) throw new Error("REACT_APP_API_BASE is not defined");
                const response = await axios.get(`${API_BASE}/comments`);
                //console.log('Fetched comments:', response.data);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error.message);
            }
        };
        fetchComments();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/'); // Navigate to homepage after logout
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
            <header className="w-full flex justify-between items-center bg-gray-300 shadow-md p-4 flex-col">
                <h1 className="text-2xl font-bold text-red-900">Comment App ~ RBAC</h1>
                <nav className="space-x-4">
                    {!user ? (
                        <Link to="/login" className="text-red-800 hover:bg-yellow-300">Login</Link> // Links to login page when not logged in
                    ) : (
                        <button onClick={handleLogout} className="text-red-800 hover:bg-yellow-300">Logout</button> // Logout button when logged in
                    )}
                    <Link to="/signup" className="text-red-800 hover:bg-yellow-300">Signup</Link>
                    {user && user.role === 'admin' && (
                        <Link to="/admin" className="text-red-800 hover:bg-yellow-300">Admin-Dashboard</Link>
                    )}
                </nav>
            </header>

            <main className="flex-grow mt-8">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {user ? (
                    <div className="bg-white rounded-lg shadow p-4">
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <div key={comment._id} className="border-b last:border-b-0 py-2">
                                    <p className="text-gray-700">
                                        {comment.userId ? (
                                            <strong>{comment.userId.username} ({comment.userId.isActive ? 'Active' : 'Inactive'}):</strong>
                                        ) : (
                                            <strong>Unknown User:</strong>
                                        )}
                                        {comment.content}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments available.</p>
                        )}
                        {(user.role === 'editor' || user.role === 'admin') && (
                            <Link to="/comments" className="bg-blue-500 text-white p-2 rounded mt-4 inline-block">Add Comment</Link>
                        )}
                    </div>
                ) : (
                    <div className="text-gray-500">
                        <p>This application is designed to show basic implementation of Role-Based-Access-Control(RBAC).</p>
                        <p>Please Log in to access your role-specific features.</p>
                        <p>During Signup, select your role:</p>
                        <ul className="list-disc pl-6">
                            <li>Viewer: To only read the comments</li>
                            <li>Editor: To Read & Write comments</li>
                            <li>Admin: To Read, Write & Access the Admin Dashboard</li>
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
