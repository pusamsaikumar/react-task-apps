import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

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

function Comments() {
  return (
    <Container>
        <NewComment>
            <Avatar src = "https://i.ytimg.com/vi/fXvYevVmYJE/maxresdefault.jpg" /> 
            <Input placeholder='Add a comment here...' />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />  
        <Comment />

    </Container>
  )
}

export default Comments