import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MembersList.css'; // Make sure this is imported

function MembersList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get('http://localhost:5000/api/members');
      setMembers(res.data);
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-container">
      <h2 className="members-title">Team Members</h2>
      <div className="members-grid">
        {members.map(member => (
          <div key={member._id} className="member-card">
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              className="member-image"
            />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role"><strong>Roll Number:</strong> {member.rollNumber}</p>
            <Link to={`/members/${member._id}`}>
              <button className="detail-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembersList;
