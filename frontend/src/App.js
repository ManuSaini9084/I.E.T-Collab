import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import StudentPanel from './components/StudentPanel';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home'; // Import the new Home component
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
