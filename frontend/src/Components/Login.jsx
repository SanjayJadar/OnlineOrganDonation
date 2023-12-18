import React from 'react'; 
import { useNavigate } from 'react-router-dom';  

const LoginPage = () => {
  const username = 'username';
  const password = 'password';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(username==='username' && password==='password'){
      navigate('/admin'); 
    }
  };

  return (
    <> 
    <div style={{cursor:'pointer'}} onClick={()=>{navigate('../')}} className="back-to-home">
      <h2 className="back-to-home-heading">
        Back to Home
        <span className="arrow">&#8592;</span>
      </h2>
    </div>

    <div className="admin-message">
      <p className="admin-message-text">
        Only Admin can login and access this page
      </p>
    </div>
    
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value='username' 
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value='password' 
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div> 
    </>
  );
};

export default LoginPage;