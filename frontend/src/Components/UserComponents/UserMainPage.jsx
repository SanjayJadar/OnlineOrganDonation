import React, { useState } from 'react'
import Header from './Header'
import MainPosts from '../CommonComponents/MainPosts'
import FilterPosts from './FilterPosts'

const UserMainPage = () => {

  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const access='user';

  return (
    <div>
        <Header selectedBloodGroup={selectedBloodGroup} setSelectedBloodGroup={setSelectedBloodGroup}/>
        {selectedBloodGroup==='' ?  <MainPosts access={access}/> : <FilterPosts access={access} selectedBloodGroup={selectedBloodGroup}/>} 
    </div>
  )
}

export default UserMainPage
 