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
          src="https://i.pinimg.com/564x/70/26/e8/7026e849daff8eb9b5b4d6c2fa2ed10a.jpg"
          alt="Profile"
          className="profile-image"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
};

export default Header;

