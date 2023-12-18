import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="header-container">
      <h1 className="header-title">You can save a life and make your life better</h1>
      <img
        src="https://i.pinimg.com/564x/70/26/e8/7026e849daff8eb9b5b4d6c2fa2ed10a.jpg"
        alt="Profile"
        className="profile-image"
        onClick={()=>navigate('/login')}
      />
    </div>
  );
};

export default Header;

