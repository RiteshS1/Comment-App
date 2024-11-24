const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Update user role
router.put('/users/:id', async (req, res) => {
    const { role, isActive } = req.body;
    await User.findByIdAndUpdate(req.params.id, { role, isActive });
    res.json({ message: 'User updated' });
});

module.exports = router;
