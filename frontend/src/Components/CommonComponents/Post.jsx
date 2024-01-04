import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

const Posts = ({getData, isLoading, dataFetching, hasMoreData, setIsLoading, access}) => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(getData.length!==0){
      setIsLoading(false);
    } 
  }, [getData])

  return (
    <>
    <div className="main-page-container">
      {/* Cards */}
      {getData.map((data, index)=>( 
        <div className="card-container" key={index} onClick={()=>{navigate('/details', {state:{patient:data, using:access}})}}>
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


      {/* Loading indicator or placeholders */}
      {isLoading && getData && (
        <>
          {/* Immediate and visible loading overlay */}
          <div className="loading-overlay"></div>

          {/* Placeholder boxes with dim background color */}
          {[...Array(6)].map((_, index) => (
            <div className="card-container placeholder" key={index}>
              <div className="placeholder-content"></div>
            </div>
          ))}
        </>
      )}


    </div>
            {/* {Infinate Scrolling Data Fetching or Loading} */}
      {dataFetching && <p className='loading'>Loading</p>}
      {!dataFetching && !hasMoreData && getData.length>0 && <p className='notLoading'>End of Data</p>}
    </>
  );
};

export default Posts;
