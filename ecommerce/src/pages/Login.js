import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width:100vw;
  height:100vh;
  background:linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url("https://wallpapershome.com/images/pages/pic_h/14532.jpg") center;
 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:center;
`;
const Wrapper = styled.div`
  padding:20px;
  width:25%;
  background-color:whitesmoke;
  border-radius:6px;
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
  margin:10px 10px;
`;
const Button = styled.button`

`;
const Link = styled.a`

`;

const Login = () => {
  return (
    
<Container>
   <Wrapper>
   <Title>SIGN IN</Title>
    <Form>
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="password" />
    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
    <Link>CREATE A NEW ACCOUNT</Link>
    <Button>LOGIN</Button>
    </Form>
   </Wrapper>
</Container>
  )
}

export default Login