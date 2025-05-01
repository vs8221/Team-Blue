// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddMember from './components/AddMember';
import MembersList from './components/MembersList';
import MemberDetail from './components/MemberDetail';
import logo from './assets/logo.png';    // <- adjust path if needed
import './App.css';

function App() {
  return (
    <Router>
      {/* Top Bar */}
      <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
        <h1 className="app-title">Team Member Management</h1>
      </header>

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/members/:id" element={<MemberDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
