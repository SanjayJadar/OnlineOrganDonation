import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ selectedBloodGroup, setSelectedBloodGroup }) => {
  const navigate = useNavigate();
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleBloodGroupChange = (e) => {
    setSelectedBloodGroup(e.target.value);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="header-title">You can save a life and make your life better</h1>
      </div>
      <div className="header-right">
        <button
          className="post-request-button"
          onClick={() => navigate('/request')}
        >
          Post A Request
        </button>
        <div className="blood-group-container">
          <label className="blood-group-label">Filter:</label>
          <select
            className="blood-group-dropdown"
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
        <img
          src="https://ace.jeka.by/assets/images/avatars/profile-pic.jpg"
          alt="Profile"
          className="profile-image"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
};

export default Header;

