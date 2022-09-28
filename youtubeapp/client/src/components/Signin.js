import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/UserSlice';
import {auth,provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';




const Contaienr = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:calc(100vh-56px);
margin: 150px auto;
padding:10px;
width:400px;
height:600px;

`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
//   width: 300px;
//   height:500px;
  background-color: ${({theme})=>theme.bgLighter};
  border: 1px solid lightgrey;
  border-radius:5px;
  padding: 20px 50px;
  margin-bottom:10px;
  `;
const Title = styled.h1`
font-size:24px;
margin-bottom:10px;
`;
const SubTitle = styled.h2`
font-size:20px;
margin-top:10px;
font-weight:300;
margin-bottom:5px;
`;
const Input = styled.input`
border:1px solid lightgrey;
width:100%;
margin-bottom:7px;
padding:10px;
border-radius:3px;
background-color:transparent;
outline:none;
`;
const Button = styled.button`
    padding:10px 20px;
    background-color:lightgreen;
    color:white;
    font-weight:500;
    border-radius:5px;
    cursor:pointer;
    border:none;
    font-size:15px;
    width:120px;
    &:hover{
        background-color:lightgrey;
        color:grey;
    }
`;
const GoogleButton = styled.button`
padding:10px 20px;
background-color:darkorange;
color:white;
font-weight:500;
border-radius:5px;
cursor:pointer;
border:none;
font-size:15px;
width:100%;
&:hover{
    background-color:lightgrey;
    color:grey;
}
`;
const More = styled.div`
 display: flex;
 margin-top:10px;
 color:silver;
`;
const Links = styled.div`
margin-left:10px;
`;
const Link = styled.span`
margin-left:5px;

`;


function Signin() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
   
  const handleClick = async(e)=>{
    e.preventDefault();
      try{
              dispatch(loginStart())
              const res = await axios.post('http://localhost:8800/auth/signin',{name,password});
              dispatch(loginSuccess(res.data));
              //console.log(res.data);
              setName("");
              setPassword("");
          }catch(err){
             //console.log(err);
            // dispatch(loginFailure(err))
          }
  } 

  // google authenticatin with firebase ;
 const SinginWithGoogle = async()=>{
  dispatch(loginStart());
    signInWithPopup(auth,provider)
    .then((result)=>{
     
      axios.post('http://localhost:8800/auth/google',{
        name:result.user.displayName,
        email:result.user.email,
        img:result.user.photoURL,
      })
      .then((res)=>{
        dispatch(loginSuccess(res.data))
      }
      
      )
      .catch((err)=>{})
      // axios.post('http://localhost:8800/auth/google',{
      //   name:result.user.displayName,
      //   email:result.user.email,
      //   img:result.user.photoURL,
      // })
      // .then((res) => dispatch(loginSuccess(res.data)))
      // .catch((err)=>{
      //   dispatch(loginFailure(err))
      // })
    }).catch((err)=>{
      dispatch(loginFailure(err))
    })
 }

  return (
    <Contaienr>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>To continue with this SaiTube...</SubTitle>
            <Input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)} value={name} />
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button onClick={handleClick}>Sign In</Button>

            <Title> or </Title>
            <GoogleButton onClick={SinginWithGoogle}>Signin with Google</GoogleButton>
            <Title> or </Title>
            <Input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)} value={name} />
            <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button style={{backgroundColor:"steelblue"}} >Sign Up</Button>
        </Wrapper>
        <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link> privacy</Link>
                    <Link>terms</Link>
                </Links>
            </More>
    </Contaienr>
  )
}

export default Signin