import axios from 'axios';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {format} from 'timeago.js'
 
const Container = styled.div`
 display:flex;
gap:20px;
margin:30px 0px;
`;
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50px;
object-fit:cover;
`;
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({theme})=>theme.text}
`;
const Name = styled.span`
font-size:13px;
font-weight:500;
`;
const Date = styled.span`
font-weight:400;
font-size:12px;
margin-left:10px;
color:${({theme})=>theme.textSoft}
`;
const Text = styled.span`
font-size:14px;
`;


function Comment({comment}) {
   const [chennel,setChennel] = useState({});
   // fetch users 
   useEffect(()=>{
      const getUsers = async()=>{
        const res = await axios.get( `http://localhost:8800/users/find/${comment.userId}`);
      setChennel(res.data);
      console.log(res.data)
      };
      getUsers();
   },[comment.userId])


  return (
    <Container>
       <Avatar src ={chennel.img} /> 
       <Details>
         <Name>{chennel.name} <Date> {format(chennel.createdAt)}</Date></Name>
         <Text>{comment.desc}</Text>
       </Details>
    </Container>
  )
}

export default Comment;