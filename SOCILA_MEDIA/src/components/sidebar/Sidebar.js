import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CloseFriend from '../closeFriend/CloseFriend';
import {User, Users} from '../../DummyData';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarwrapper'>
        <ul className='sidebarlist'>
          <li className='sidebarlistItem'>
              <RssFeedIcon className='sidebarIcon' />
              <span className='sidebarText'>Feed</span>
          </li>
          <li className='sidebarlistItem'>
            <ChatIcon className='sidebarIcon' />
              <span className='sidebarText'>Chats</span>
          </li>
          <li className='sidebarlistItem'>
              <PlayCircleIcon className='sidebarIcon' />
              <span className='sidebarText'>videos</span>
          </li>
          <li className='sidebarlistItem'>
              <GroupIcon className='sidebarIcon' />
              <span className='sidebarText'>Groups</span>
          </li>
          <li className='sidebarlistItem'>
              <BookmarkIcon className='sidebarIcon' />
              <span className='sidebarText'>Bookmarks</span>
          </li>
        
          <li className='sidebarlistItem'>
              <HelpOutlineIcon className='sidebarIcon' />
              <span className='sidebarText'>Questions</span>
          </li>
          <li className='sidebarlistItem'>
              <WorkOutlineIcon className='sidebarIcon' />
              <span className='sidebarText'>Jobs</span>
          </li>
          <li className='sidebarlistItem'>
              <EventIcon className='sidebarIcon' />
              <span className='sidebarText'>Events</span>
          </li>
          <li className='sidebarlistItem'>
              <CardGiftcardIcon className='sidebarIcon' />
              <span className='sidebarText'>Courses</span>
          </li>
        </ul>
        <button className='sidebar-button'>Show more</button>
        <hr className='sidebarHr' />
        <ul className='sidebarfriendlist' >
              {Users.map((user,index) =>{
                return  <CloseFriend user={user} key={index}  />
              })}
           
        </ul>
      </div>
    </div>
  )
}

export default Sidebar