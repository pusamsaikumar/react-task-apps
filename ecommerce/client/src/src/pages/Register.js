import React from 'react';
import styled from "styled-components";
import { mobile } from '../resposive';

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url("https://wallpapershome.com/images/wallpapers/yosemite-3840x2160-5k-4k-wallpaper-8k-forest-osx-apple-mountains-181.jpg") center;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper =styled.div`
padding:20px;
width:40%;
background-color:ghostwhite;
border-radius:10px;
${mobile({width:"75%"})};
`;
const Title = styled.h1`
font-weight:300;
font-size:24px;
color:teal;
`;
const Form = styled.div`
 display:flex;
flex-wrap:wrap;
 
`;
const Input = styled.input`
flex:1;
min-width:40%;
padding:10px;
margin:20px 10px 0 0 ;
outline:none;
border:1px solid lightgrey;
border-radius:5px;
`;
const Aggrement = styled.span`
margin:20px 15px;
font-size:12px;
color:darkred;
`;
const Button = styled.button`
width:40%;
padding:15px 20px;
border:none;
background-color:lightgray;
color:white;
font-size:16px;
border-radius:6px;
font-weight:700;
&:hover{
    background-color:steelblue;
    color:firebrick;
}
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input type="text" placeholder='First Name' />
            <Input type="text" placeholder='Last Name' />
            <Input type="text" placeholder='Username' />
            <Input type="email" placeholder='Email' />
            <Input type="password" placeholder='Password' />
            <Input type="password" placeholder='Confirm password' />
            <Aggrement>
                By creating an account. I consent to the processing of my personal data in accordance with the <b><span style={{color:"darkblue"}}>PRIVACY POLICY</span></b>
            </Aggrement>
            <Button>CREATE</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Register