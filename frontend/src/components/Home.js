import React from 'react';
import { useNavigate } from 'react-router-dom';


import './Home.css'; // Import external CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">TEAM BLUE</h1>
      <p className="home-subtitle">Welcome to the BLUE Team Management</p>
      <div className="button-box">
        <h3>Manage Team</h3>
        <div className="buttons">
          <button onClick={() => navigate('/add')}>Add Member</button>
          <button onClick={() => navigate('/members')}>View Members</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
