import React, { useState } from 'react'; 

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // You can access the form data using the state variables
    
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <label>
        Patient ImageUrl:
        <input type="text" value={liveImage} onChange={(e) => setliveImage(e.target.value)} />
      </label>

      <label>
        Patient Name:
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
      </label>

      <label>
        Patient Age:
        <input type="number" value={age} onChange={(e) => setage(e.target.value)} />
      </label>

      <label>
        Blood Group:
        <select value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)}>
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
        <select value={gender} onChange={(e) => setgender(e.target.value)}>
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
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          rows="4"
          maxLength="150"
        />
      </label>

      <label>
        Description (up to 2000 words):
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          rows="8"
          maxLength="2000"
        />
      </label>

      <label>
        Compensation (up to 2000 words):
        <textarea
          value={compensation}
          onChange={(e) => setcompensation(e.target.value)}
          rows="8"
          maxLength="2000"
        />
      </label>

      <label>
        Mobile Number:
        <input type="number" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
      </label>

      <label>
        Other Contact Details:
        <input type="text" value={otherContactDetails} onChange={(e) => setotherContactDetails(e.target.value)} />
      </label>

      <label>
        Any Valid ID proof URL of Patient :
        <input type="text" value={id_Proof} onChange={(e) => setid_Proof(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
