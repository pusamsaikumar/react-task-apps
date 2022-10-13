import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from  "styled-components";
import { mobile } from '../resposive';
import { textAlign } from '@mui/system';

const Container = styled.div`
height:60vh;
background-color:skyblue;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-bottom:20px;
border-radius:3px;
`;
const Title = styled.h1`
 font-size:70px;
 color: white;
 ${mobile({textAlign:"center",fontSize:"50px"})}
`;
const Desc = styled.div`
font-weight:300;
font-size:24px;
margin-bottom:20px;
// color:seashell;
color:darkred;
${mobile({textAlign:"center",fontSize:"18px"})}

`;
const InfoContainer = styled.div`
margin-bottom:20px;
background-color:snow;
width:50vw;
height:40px;
display:flex;

justify-content:space-between;
border:1px solid lightgrey;
${mobile({width:"90%"})};
`;
const Input = styled.input`
border:none;
outline:none;
padding-left:20px;
flex:8;

`;
const Button = styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
&:hover{
    background-color:lightgrey;
    color:firebrick;
}
`;

  
const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InfoContainer>
            <Input type="email" placeholder='Your Email' />
            <Button>
                <SendIcon />
            </Button>
        </InfoContainer>
    </Container>
  )
}

export default Newsletter;