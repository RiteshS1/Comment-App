const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment');
const adminRoutes = require('./routes/admin');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/admin', adminRoutes);


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    // Serve index.html for all routes that don't match an API route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    // In development mode, just log that it's running
    console.log("Running in development mode");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
