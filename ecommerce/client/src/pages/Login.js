import React from 'react';
import styled from "styled-components";
import {mobile} from "../resposive";

const Container = styled.div`
  width:100vw;
  height:100vh;
  background:linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url("https://techbeasts.com/wp-content/uploads/2016/12/4k-wallpaper-5-1024x640.jpg") center;
 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:center;
`;
const Wrapper = styled.div`
  padding:20px;
  width:25%;
  background-color:lightgrey;
  border-radius:6px;
  ${mobile({width:"75%"})};
`;
const Title =styled.h1`
font-weight:300;
font-size:24px;
`;
const Form = styled.div`
  display:flex;
  flex-direction:column;
   
`;
const Input = styled.input`
  flex:1;
  min-width:40%;
  margin:10px 0px;
  padding:10px;
  outline:none;
  border:1px solid lightgrey;
  border-radius:6px;
`;
const Button = styled.button`
width:25%;
border:1px solid lightgrey;
color:darkred;
padding:10px;
cursor:pointer;
font-weight:700;
border-radius:5px;
margin-bottom:10px;
&:hover{
  background-color:darkblue;
  color:white;

}


`;
const Link = styled.a`
margin:5px 0;
text-decoration:underline;
font-size:12px;
`;

const Login = () => {
  return (
    
<Container>
   <Wrapper>
   <Title>SIGN IN</Title>
    <Form>
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="password" />
    <Button>LOGIN</Button>
    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
    <Link>CREATE A NEW ACCOUNT</Link>
   
    </Form>
   </Wrapper>
</Container>
  )
}

export default Login