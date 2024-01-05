import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const PostDetails = () => {

  const location = useLocation();    
  const navigate = useNavigate();

  const DeleteMain = async(id) => {
    const confirm = window.confirm("Are you sure you want to delete this data?");
    if(confirm){
      axios.delete(`https://onlineorgandonationbackend.onrender.com/main/delete/${id}`)    
      .then(res=>{ 
        if(res.data.message){
          alert(res.data.message)
        }
        else{ 
          alert('Deleted Successfully');
          navigate('/admin')
        }
      })
      .catch(e=>console.log(e.message)); 
    }
  }
  
  const PostTemp = async(recipient) => {
    const confirm = window.confirm("Are you sure you want to forward this data?");
    if(confirm){
      axios.post(`https://onlineorgandonationbackend.onrender.com/main/post`, {name: recipient.name, age: recipient.age, bloodGroup: recipient.bloodGroup, gender: recipient.gender, id_Proof: recipient.id_Proof, liveImage: recipient.liveImage, address: recipient.address, description: recipient.description, compensation: recipient.compensation, mobileNumber: recipient.mobileNumber, otherContactDetails: recipient.otherContactDetails, createdAt: recipient.createdAt})
      .then(res=>{ 
        if(res.data.message){
          alert(res.data.message)
        }
        else{ 
          alert('Posted Successfully');
          axios.delete(`https://onlineorgandonationbackend.onrender.com/delete/${recipient._id}`)  
          navigate('/admin')
        }
      })
      .catch(e=>console.log(e.message)); 
    }
    
  }
  
  const DeleteTemp = async(id) => {
    const confirm = window.confirm("Are you sure you want to delete this data?");
    if(confirm){
      axios.delete(`https://onlineorgandonationbackend.onrender.com/delete/${id}`)
      .then(res=>{ 
        if(res.data.message){
          alert(res.data.message)
        }
        else{ 
          alert('Deleted Successfully');
          navigate('/admin')
        }
      })
      .catch(e=>console.log(e.message)); 
    } 
  }

  return (
    <div> 
    <div className="main-details-container">
      <div className="main-details-header">
        <img
          src={location.state.patient.liveImage} // Replace with your image source
          alt="Profile"
          className="patient-image"
        />
      </div>
      <div className="main-details-content">
        {location.state.using!=='user' ?
                  <img
                    src={location.state.patient.id_Proof} // Replace with your image source
                    alt="Profile"
                    className="patient-image"
                  />
                  : 
                  <></>
        }
        <h2 className="details-title">{location.state.patient.name}</h2>
        <div className="details-info">{location.state.patient.age} | {location.state.patient.bloodGroup}</div>
        <div className="details-info">Gender: {location.state.patient.gender}</div>
        <div className="details-info">Address: {location.state.patient.address}</div>
        <div className="details-description">{location.state.patient.description}</div>
        <div className="details-description">{location.state.patient.compensation}</div>
        <div className="details-info">Mobile Contact: {location.state.patient.mobileNumber}</div>
        <div className="details-info">Other Contact: {location.state.patient.otherContactDetails}</div> 
        <div className="details-info">Date of Request: {new Date(location.state.patient.createdAt).toLocaleDateString()}</div>
        {location.state.using==='temporary-posts' ? 
              <div className="details-actions">
                  <button className="post-button" onClick={()=>{PostTemp(location.state.patient)}}>Post</button>
                  <button className="delete-button" onClick={()=>{DeleteTemp(location.state.patient._id)}}>Delete</button>
              </div>
        : location.state.using==='main-posts' ?
              <div className="details-actions"> 
                  <button className="delete-button" onClick={()=>{DeleteMain(location.state.patient._id)}}>Delete</button>
              </div> 
        :  <></>
        }
      </div>
    </div>
    </div>
  );
};

export default PostDetails;
