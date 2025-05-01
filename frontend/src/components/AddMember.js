import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css'; // Make sure this is imported

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    image: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding member');
    }
  };

  return (
    <div className="add-member-container">
      <h2 className="add-member-title">Add Team Member</h2>
      <form className="add-member-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} required />
        <input name="year" placeholder="Year" onChange={handleChange} required />
        <input name="degree" placeholder="Degree" onChange={handleChange} required />
        
        {/* Taller Textarea */}
        <textarea name="project" placeholder="About Project" onChange={handleChange}></textarea>
        
        <input name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} />
        <input name="certificate" placeholder="Certificate" onChange={handleChange} />
        <input name="internship" placeholder="Internship" onChange={handleChange} />
        
        {/* Taller Textarea */}
        <textarea name="aim" placeholder="About Your Aim" onChange={handleChange}></textarea>

        <input type="file" onChange={handleFileChange} accept="image/*" required />

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
