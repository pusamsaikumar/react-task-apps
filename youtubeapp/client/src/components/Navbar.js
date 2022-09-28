import React from 'react';
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Container = styled.div`
background-color:${({theme})=>theme.bgLighter};
height:56px;
position:sticky;
top:0;
border-bottom:${({theme})=>theme.borderRight};
`;

const Wrapper =styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
position:relative;
padding:0px 20px;
padding-top:5px
`;
const Search = styled.div`
// background-color:red;
left:0px;
right:0px;
margin:auto;
align-items:center;
justify-content:space-between;
display:flex;
position:absolute;
width:45%;
padding:5px;
border-radius:3px;
border:1px solid #ccc;
`;
const Input = styled.input`
border:none;
outline:none;
background-color:transparent;
`;
const Button = styled.button`
border:1px solid darkorange;
padding:5px 15px;
background-color:transparent;
color:darkorange;
display:flex;
align-items:center;
gap:5px;
border-radius:3px;

font-weight:500;
cursor:pointer;
`;

const Avatar = styled.img`
width:32px;
height:32px;
border-radius:50px;
background-color:#999;
`

const User = styled.div`
display:flex;
align-items:center;
gap:10px;
font-weight:500;

color:	darkslategray;
`

function Navbar() {
    const {currentUser} = useSelector((state)=>state.user);
  return (
   <Container>
    <Wrapper>
        <Search>
            <Input type="text" placeholder='Search...'/>
            <SearchIcon />
        </Search>
       {currentUser ? (
        <User>
         <VideoCallIcon />
         <Avatar src={currentUser.img} />
         {currentUser.name}
        </User>
       ) :(
        <Link to='/signin' style={{textDecoration:"none"}}>
        <Button>
            <AccountCircleIcon />
            SIGN IN
        </Button>
        </Link>
       )}
    </Wrapper>
   </Container>
  )
}

export default Navbar