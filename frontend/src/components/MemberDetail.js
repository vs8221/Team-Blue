import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './MemberDetail.css';

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => {
        console.error(err);
        alert('Error fetching member details');
      });
  }, [id]);

  if (!member) return <p className="loading">Loading...</p>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="detail-card">
        <h2 className="detail-title">Member Details</h2>
        {member.image && (
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="detail-image"
          />
        )}
        <h3 className="detail-name">{member.name}</h3>
        {member.rollNumber && (
          <p><span className="label">Roll Number:</span> {member.rollNumber}</p>
        )}
        {member.year && (
          <p><span className="label">Year:</span> {member.year}</p>
        )}
        {member.degree && (
          <p><span className="label">Degree:</span> {member.degree}</p>
        )}
        {member.project && (
          <p><span className="label">Project:</span> {member.project}</p>
        )}
        {member.hobbies && (
          <p>
            <span className="label">Hobbies:</span>{' '}
            {Array.isArray(member.hobbies)
              ? member.hobbies.join(', ')
              : member.hobbies}
          </p>
        )}
        {member.certificate && (
          <p><span className="label">Certificate:</span> {member.certificate}</p>
        )}
        {member.internship && (
          <p><span className="label">Internship:</span> {member.internship}</p>
        )}
        {member.aim && (
          <p><span className="label">Aim:</span> {member.aim}</p>
        )}
      </div>
    </div>
  );
}

export default MemberDetail;
