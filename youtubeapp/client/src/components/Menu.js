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

const Container = styled.div`
  background-color:darkblue;
  flex: 1;
 // overflow-y:scroll;
 height:100vh;

  color: white;
  font-size: 14px;
  position: sticky;
  top: 0; 
`;
const Logo = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  font-weight:bold;
  margin-bottom:10px;
  
`
const Img = styled.img`
  height:20px;

`
const Wrapper =styled.div`
  padding:10px 26px;
`;
const Item = styled.div`
display:flex;
align-items:center;
gap:20px;
padding:5px 0px;
`;
const Hr = styled.hr`
  margin:8px 0px;
  border:0.5px solid grey;
`;
const Login = styled.div`
font-size:12.5px
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
margin-top:10px;
font-weight:500;
cursor:pointer;
`
function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={saiTube}/>
          SaiTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>

        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
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
        <Login>
        Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
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
        <Item>
          <SettingsBrightnessOutlinedIcon />
          Mode
        </Item>
        <Hr />
      </Wrapper>
    </Container>
  )
}

export default Menu
