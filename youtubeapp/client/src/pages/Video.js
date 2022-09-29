import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Card from '../components/Card';


// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
// import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
// import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { stepLabelClasses } from '@mui/material';
import Comments from '../components/Comments';
import {useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchSuccess,fetchStart,fetchFailure, like ,dislike, subscription} from '../redux/VideoSlice';
import { format } from 'timeago.js';
const Container = styled.div`
display:flex;
gap:10px
`;
const Content = styled.div`
flex:5
`;
const Recommendation = styled.div`
flex:2
`;
const VideoWrapper = styled.div`
`;
const Title = styled.div`
font-weight:400;
font-size:18px;
margin-top:24px;
margin-bottom:10px;
color:${({theme})=>theme.text}
`;
const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

`;
const Info = styled.span`
color:${({theme})=>theme.textSoft}
`;
const Buttons = styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.text}
`;
const Button = styled.div`
display:flex;
align-items:center;
gap:5px;
cursor:pointer;
`;
const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid lightgrey
`;
const Chennel = styled.div`
display:flex;
justify-content:space-between;
`;
const ChennelInfo = styled.div`
display:flex;
gap:20px;
`;
const Image = styled.img`
width:50px;
height:50px;
border-radius:50px;
object-fit:cover
`;
const ChennelDetails = styled.div`
display:flex;
flex-direction:column;
color:${({theme})=>theme.text}
`;
const ChennelName = styled.span`
font-weight:500;

`;
const ChennelCounter = styled.span`
margin-top:5px;
margin-bottom:20px;
font-size:12px;
color:${({theme})=>theme.textSoft}
`;
const ChennelDescription = styled.p`
font-size:14px;
`;
// videoframe:
const VideoFrame = styled.video`
   width:100%;
   max-height:720px;
   object-fit:cover;
`;
const Subscribe = styled.button`
background-color:#cc1a00;
height:max-content;
padding:10px 20px;
border:none;
color:white;
border-radius:3px;
cursor:pointer;
`;
function Video() {
const {currentUser} = useSelector((state)=>state.user);
const {currentVideo} = useSelector((state)=>state.video);
const dispatch = useDispatch();

const [video,setVideo] = useState({});
const [chennel,setChennel] = useState({});

const path = useLocation().pathname.split("/")[2];
 console.log(path);



   useEffect(()=>{
    const getFetch= async()=>{
        try{
          const videoRes = await axios.get(`http://localhost:8800/videos/find/${path}`);
          const chennelRes = await axios.get(`http://localhost:8800/users/find/${videoRes.data.userId}`);
          /* console.log(chennelRes.data);
           console.log(videoRes.data); */
          dispatch(fetchSuccess(videoRes.data));
          setChennel(chennelRes.data); 

        }catch(err){

        }
    };
    getFetch();
   },[path,dispatch]);


  


//dislikes videso

const handleLike = async ()=>{



    try{
      const response =   await axios.put(`http://localhost:8800/users/like/${currentVideo._id}`);
      dispatch(like(response.data))
    }catch(err){

    }
};


// like a video
const handleDislike= async()=>{



  try{
    const response =   await axios.put(`http://localhost:8800/users/dislike/${currentVideo._id}`);
    dispatch(dislike(response.data))
  }catch(err){

  }
}

// sub a videos
const handleSubscription = async()=>{
  currentUser.subscribedUsers.includes(chennel._id) ?
  await axios.put(`http://localhost:8800/users/unsub/${chennel._id}`)
  : await axios.put(`http://localhost:8800/users/sub/${chennel._id}`) ;
  dispatch(subscription(chennel._id));
}

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
         <Title>{currentVideo.title}</Title> 
        <Details>
        <Info>{currentVideo.views} views . {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button  onClick={handleLike} >
              {
                currentVideo.likes.includes(currentUser._id) ? (<ThumbUpIcon />) : <ThumbUpOffAltIcon />
              }
              
              {currentVideo.likes.length}
              </Button>
            <Button onClick={handleDislike} >
              {
                currentVideo.dislikes.includes(currentUser._id) ? (<ThumbDownIcon />) :    <ThumbDownOffAltIcon/>
              }
            
               {currentVideo.dislikes.length}
              
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <AddTaskIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Chennel>
          <ChennelInfo>
            <Image src={chennel.image} />
            <ChennelDetails>
               <ChennelName>{chennel.name}</ChennelName>
               <ChennelCounter>{chennel.subcribers}, subscribers</ChennelCounter>
               <ChennelDescription>
             
               </ChennelDescription>
            </ChennelDetails>
          </ChennelInfo>
          <Subscribe >{currentUser.subscribedUsers.includes(chennel._id) ? "SUBSCRIBED" : "SUBSCRIBE"}</Subscribe>
        </Chennel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
   
    </Container>
  )
}

export default Video