import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {format} from 'timeago.js';
import axios from 'axios';

// const Container = styled.div`
// width:${(props) => props.type !== "small" && "360px"};
// margin-bottom:${(props) => props.type === "small" ? "10px" : "45px"};
// cursor:pointer;
// display:${(props)=>props.type === "small" && "flex"};
// gap:10px;

// `;
const Container = styled.div`
  width: ${(props) => props.type !== "small" && "360px"};
  
  margin-bottom: ${(props) => (props.type === "small" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "small" && "flex"};
  
  gap: 5px;
`;
const Image = styled.img`

width: 100%;
height: ${(props) => (props.type === "small" ? "100px" : "200px")};
background-color: #999;
flex: 1;
`;
const  Details = styled.div`
display: flex;

// margin-top: ${(props) => props.type !== "small" && "16px"};
gap: 12px;
flex: 1;
// background-color:red;

`;
const ChennelImg = styled.img`
width:32px;
height:32px;
border-radius:50px;
background-color:#999;
margin-right:10px;
display:${(props)=>props.type === "small" && "none"}
`;
const Texts = styled.div`

`;
const Title = styled.h1`
font-size:16px;
font-weight:bold;
color:${({theme})=>theme.text}
`;
const ChennelName = styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft};
margin:9px 0px;
`;
const Info = styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft};
`;
const Hr = styled.hr`
margin:15px 0px;
border:1px solid lightgrey
`
function Card({type,video}) {

  const [chennel,setChennel] = useState({});
  
 

 useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChennel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
   <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type}  src={video.imgUrl}/>
      <Details type={type} >
        <ChennelImg type={type} src={chennel.img} />
        <Texts>
          <Title>{video.title}</Title>
          <ChennelName>{chennel.name}</ChennelName>
          <Info>{video.views} views . {format(video.createdAt)} </Info>
        </Texts>
      

    </Details>
    
    </Container>
   </Link>
  )
}

export default Card