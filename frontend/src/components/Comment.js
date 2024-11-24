import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CommentSection = () => {
    const { user } = useAuth(); // Get user from context
    const [newComment, setNewComment] = useState('');
    const navigate = useNavigate();
    const API_BASE = process.env.REACT_APP_API_BASE;
    console.log('Current user:', user); // Log the current user

    const handleAddComment = async () => {
        if (!user) {
            alert('You must be logged in to add a comment.');
            return;
        }
        if (user.role !== 'editor' && user.role !== 'admin') {
            alert('You do not have permission to add comments.');
            return;
        }
        try {
            const response = await axios.post(`${API_BASE}/comments`, { userId: user.id, content: newComment });
            console.log('Comment added:', response.data); // Log the response
            setNewComment(''); // Clear the input after adding
            navigate('/'); // Redirect to home after adding a comment
        } catch (error) {
            console.error('Error adding comment:', error.response ? error.response.data : error.message);
            alert('Failed to add comment. Please try again.');
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2 text-red-800">Add Comment</h2>
            {user && (user.role === 'editor' || user.role === 'admin') && (
                <div className="mb-4">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Type your comment here..."
                        className="border p-2 w-full"
                    />
                    <button onClick={handleAddComment} className="bg-blue-500 text-white p-2 rounded mt-2">Submit</button>
                </div>
            )}
        </div>
    );
};

export default CommentSection;
