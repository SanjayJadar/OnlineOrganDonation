import React, { useEffect } from 'react';

const AdminHeader = ({activeTab, setActiveTab}) => {
  const tabs = [
    { id: 'temporary-posts', label: 'Temporary Posts' },
    { id: 'main-posts', label: 'Main Posts' },
  ];
 

  useEffect(()=>{
    setActiveTab(tabs[0].id); 
  }, [])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-header-container">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
        >
          <span className="tab-text">{tab.label}</span>
          <div className="tab-line"></div>
        </div>
      ))}
    </div>
  );
};

export default AdminHeader;
