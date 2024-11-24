const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Get comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find()
            .populate('userId', 'username isActive')
            .exec();
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add comment
router.post('/', async (req, res) => {
    const { userId, content } = req.body;
    if (!userId || !content) {
        return res.status(400).json({ message: 'userId and content are required.' });
    }
    try {
        const newComment = new Comment({ userId, content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
