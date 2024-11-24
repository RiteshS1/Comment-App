import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import CommentSection from './components/Comment';

function App() {
    return (
      
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/comments" element={<CommentSection />} />
            </Routes>
        </Router>
    );
}

export default App;
