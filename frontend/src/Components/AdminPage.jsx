import React from 'react'; 

const AdminPage = () => {
  return (
    <div className="tab-header-container">
      <div className="tab">
        <span className="tab-text">Main Posts</span>
        <div className="tab-line"></div>
      </div>
      <div className="tab">
        <span className="tab-text">Temporary Posts</span>
        <div className="tab-line"></div>
      </div>
    </div>
  );
};

export default AdminPage;
