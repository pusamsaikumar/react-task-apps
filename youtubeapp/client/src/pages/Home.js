import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;


function Home({type}) {
  const [videos,setVideos] = useState([]);
  useEffect(() => { 
    const getFetchedVideos = async()=>{
      const res= await axios.get(`http://localhost:8800/videos/${type}`);
      console.log(res.data);
      setVideos(res.data);
    };
    getFetchedVideos();
  },[type]);


  return (
    <Container>
      {
        videos.map(video =>{
          return <Card key={video._id} video ={video}  />
        })
      }
      
     

    </Container>
  )
}

export default Home