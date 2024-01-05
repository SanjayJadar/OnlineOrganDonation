import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const genderOptions = ['Male', 'Female', 'Other'];

const FormComponent = () => {
  const [liveImage, setliveImage] = useState('');
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [bloodGroup, setbloodGroup] = useState('');
  const [gender, setgender] = useState('');
  const [address, setaddress] = useState('');
  const [description, setdescription] = useState('');
  const [compensation, setcompensation] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [otherContactDetails, setotherContactDetails] = useState('');
  const [id_Proof, setid_Proof] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        await axios.post('https://onlineorgandonationbackend.onrender.com/post', {name, age, bloodGroup, gender, id_Proof, liveImage, address, description, compensation, mobileNumber, otherContactDetails})
        .then(res=>{ 
          if(res.data.message){
            alert(res.data.message)
          }
          else{ 
            alert('Posted Successfully');
            navigate('/')
          }
        })
        .catch(e=>console.log(e.message));
      }catch(err){
        console.error(err);
      }
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <label>
        Patient ImageUrl:
        <input type="text" required value={liveImage} onChange={(e) => setliveImage(e.target.value)} />
      </label>

      <label>
        Patient Name:
        <input type="text" required value={name} onChange={(e) => setname(e.target.value)} />
      </label>

      <label>
        Patient Age:
        <input type="number" required value={age} onChange={(e) => setage(e.target.value)} />
      </label>

      <label>
        Blood Group:
        <select value={bloodGroup} required onChange={(e) => setbloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </label>

      <label>
        Gender:
        <select required value={gender} onChange={(e) => setgender(e.target.value)}>
          <option value="">Select Gender</option>
          {genderOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Address (up to 150 words):
        <textarea
          required
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          rows="4"
          maxLength="150"
        />
      </label>

      <label>
        Description (up to 2000 words):
        <textarea
          required
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          rows="8"
          maxLength="2000"
        />
      </label>

      <label>
        Compensation (up to 2000 words):
        <textarea
          required
          value={compensation}
          onChange={(e) => setcompensation(e.target.value)}
          rows="8"
          maxLength="2000"
        />
      </label>

      <label>
        Mobile Number:
        <input required type="number" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
      </label>

      <label>
        Other Contact Details:
        <input type="text" value={otherContactDetails} onChange={(e) => setotherContactDetails(e.target.value)} />
      </label>

      <label>
        Any Valid ID proof URL of Patient :
        <input required type="text" value={id_Proof} onChange={(e) => setid_Proof(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
