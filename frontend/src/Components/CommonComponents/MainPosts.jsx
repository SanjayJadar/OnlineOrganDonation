import React, { useEffect, useState } from 'react' 
import Posts from './Post'
import axios from 'axios';   

const MainPosts = ({access}) => {   
  const [getData, setgetData] = useState([]);
  const [page, setpage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetching, setdataFetching] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true); 

  // Fetch Data Page and Limit
  const fetchData = async()=> {
    try{
      const res = await axios.get(`https://onlineorgandonationbackend.onrender.com/main/get?page=${page}&limit=6`)
      const resData = res.data;          
        if (resData.length > 0) {
          if (page === 1) {
            setgetData(resData);
          } else {
            setgetData((prev) => [...prev, ...resData]);
          }
          setHasMoreData(true);
        } else {
          setHasMoreData(false);
        } 
    } catch (err) {
      console.error(err);
    } finally {
      setdataFetching(false); 
    }
  };


  // Scroll Handelling Function
  const handelInfiniteScroll = async () => {
    try {
      if (!dataFetching && hasMoreData) {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setdataFetching(true);
          setTimeout(() => {
            setpage((prev) => prev + 1);
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  Fetch the page and limit
  useEffect(()=>{                  
    fetchData();  
  },[page]);


  // Scroll Infinite Data
  useEffect(() => {        
    console.log(getData.length);
    if(getData.length!==0){
      window.addEventListener('scroll', handelInfiniteScroll);
      return () => window.removeEventListener('scroll', handelInfiniteScroll);
    }         
  }, [dataFetching, hasMoreData, getData]);


  return (
    <div> 
        <Posts access={access} getData={getData} isLoading={isLoading} setIsLoading={setIsLoading} dataFetching={dataFetching} hasMoreData={hasMoreData}/>
    </div>
  )
}

export default MainPosts