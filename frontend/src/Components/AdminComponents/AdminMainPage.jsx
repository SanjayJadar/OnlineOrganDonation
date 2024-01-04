import React, { useDeferredValue, useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import MainPosts from '../CommonComponents/MainPosts'; 
import TempPosts from './TempPosts';

const AdminMainPage = () => {

  const [activeTab, setActiveTab] = useState(''); 
  const access=activeTab;
  console.log(activeTab);

  return (
    <div>
        <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        {activeTab==='main-posts'  ? <MainPosts access={access}/> : <TempPosts access={access}/>}
    </div>
  )
} 
 
export default AdminMainPage; 