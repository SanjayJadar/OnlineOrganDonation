import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {

  const [getData, setgetData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=> {
      try{
        await axios.get("http://localhost:5400/get")
        .then(res=>setgetData(res.data))
        .catch(res=>console.log(res));
      }catch(err){
        console.error(err);
      }
    }

    fetchData();
    console.log(getData);
  },[]);

  return (
    <div className="main-page-container">
      {/* Cards */}
      {getData.map((data, index)=>(
        <div className="card-container" key={index}>
          <div className="card">
            <img className="card-image" src={data.liveImage} alt="Image 1" />
            <div className="card-content">
              <h2 className="card-title">{data.bloodGroup}</h2>
              <p className="card-description">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
