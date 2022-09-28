import React from 'react';
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
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/watch?v=fPuLnzSjPLE"
            title = "Youtube video player"
           
            allowFullScreen
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture'
          
          >

          </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,898,555 views . June 25, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon />
              123
              </Button>
            <Button>
               <ThumbDownOffAltIcon/>
              Dislike
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
            <Image src = "https://i.ytimg.com/vi/fXvYevVmYJE/maxresdefault.jpg" />
            <ChennelDetails>
               <ChennelName>sai kumar</ChennelName>
               <ChennelCounter>200k, subscribers</ChennelCounter>
               <ChennelDescription>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
               </ChennelDescription>
            </ChennelDetails>
          </ChennelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Chennel>
        <Hr />
        <Comments />
      </Content>
      /* <Recommendation>
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        

     


      </Recommendation> */
    </Container>
  )
}

export default Video