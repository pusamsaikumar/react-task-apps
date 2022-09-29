import React, { useEffect ,useState} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Container = styled.div`
`;
const NewComment = styled.div`
display:flex;
align-items:center;
gap:20px;
`;
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50px;
object-fit:cover;
`;
const Input = styled.input`
width:100%;
border:none;
padding:5px;
border-radius:3px;
background-color:transparent;
border-bottom:1px solid lightgrey;
outline:none;
`;

function Comments({videoId}) {
  const {currentUser} = useSelector((state)=>state.user);
  const [comments,setCommetns]=useState([]);
  // fetch comments:
  useEffect(()=>{
    const getFetchComments = async()=>{
      try{
          const res = await axios.get(`http://localhost:8800/comments/${videoId}`);
          console.log(res.data)
          setCommetns(res.data);
      }catch(err){

      }
    };
    getFetchComments();
  },[videoId]) 

  return (
    <Container>
        <NewComment>
            <Avatar src = {currentUser.img} /> 
            <Input placeholder='Add a comment here...' />
        </NewComment>

{
  comments.map((comment)=>(
    <Comment key ={comment._id} comment={comment} />

  ))
}
       

    </Container>
  )
}

export default Comments