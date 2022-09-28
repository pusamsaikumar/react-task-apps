import React from 'react'
import styled from 'styled-components';
 import saiTube from '../images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  //background-color:aliceblue;
  background-color:${({theme})=>theme.bg};
  flex: 1;
 // overflow-y:scroll;
  height:100vh;
 //height:100%;
color:${({theme})=>theme.text};
//   color: seagreen;
  font-size: 12px;
  position: sticky;
  top: 0; 
  border-right:${({theme})=>theme.borderRight};
  
`;
const Logo = styled.div`
  display:flex;
  
  align-items:center;
  gap:10px;
  font-weight:bold;
  margin-bottom:5px;
  
`
const Img = styled.img`
  height:15px;

`
const Wrapper =styled.div`
  padding:5px 26px;
`;
const Item = styled.div`
display:flex;
align-items:center;
gap:20px;
padding:5px 0px;
// color:${({theme})=>theme.text};
&:hover{
  // background-color:${({theme})=>theme.textSoft}
  background-color:lightgrey;
  color:darkblue;
`;
const Hr = styled.hr`
  margin:5px 0px;
  
 border:0.1px solid ${({theme})=>theme.borderRight};;
`;
const Login = styled.div`
font-size:12.5px;
margin-bottom:10px

`;
const Button = styled.button`
border:1px solid darkorange;
padding:5px 15px;
background-color:transparent;
color:darkorange;
display:flex;
align-items:center;
gap:5px;
margin-top:10px;
border-radius:3px;
font-weight:500;
cursor:pointer;
`;

const Title = styled.h2`
  font-weight:700;
  font-size:14px;
  color:silver;
  margin-bottom:5px
`
function Menu({darkmode,setDarkmode}) {
const {currentUser} = useSelector((state)=>state.user)


  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration:"none",color:"white"}} >
        <Logo>
          <Img src={saiTube}/>
          SaiTube
        </Logo>
        </Link>
       
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Link to="trends" style={{textDecoration:"none",color:"inherit"}}>
        <Item >
          <ExploreIcon />
          Explore
        </Item>
        </Link>
        <Link to="subscriptions" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        {
          !currentUser && <>
          <Login>
        Sign in to like videos, comment, and subscribe.
          <Link to="/signin" style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleIcon />
            SIGN IN
          </Button>
          </Link>
        </Login>
        <Hr />
          </>
        }
        <Title>BEST OF SAITUBE</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieIcon />
          Movies
        </Item>
        <Item>
          <ArticleIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live Tv
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item onClick={()=>setDarkmode(!darkmode)}>
          <SettingsBrightnessOutlinedIcon />
         {darkmode ? "Light" : "Dark"} Mode
        </Item>
     
      </Wrapper>
    </Container>
  )
}

export default Menu