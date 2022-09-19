import React, { useContext } from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   const {users} = useContext(AuthContext);
  return (
    <div className='topbar-container'>
        <div className='top-left'>
         <Link to='/' style={{textDecoration:"none"}}>
            <span className='top-logo'>SAI SOCIAL MEDIA</span>
         </Link>
        </div>
        <div className="top-center">
           <div className='topbar-search'>
            <SearchIcon className='searchIcon' />
            <input placeholder='Search for a friend,post or video....' className='searchInput' />
           </div>
        </div>
        <div className="top-right">
            <div className='top-links'>
                <span className='top-link'>Home page</span>
                <span className="top-link">Timeline page</span>
            </div>
            <div className='top-icons'>
               <div className="topIconItem">
                  <PersonIcon />
                  <span className='topIconBage'>10</span>
               </div>
               <div className="topIconItem">
                  <ChatIcon />
                  <span className='topIconBage'>10</span>
               </div>
               <div className="topIconItem">
                  <NotificationsNoneIcon />
                  <span className='topIconBage'>10</span>
               </div>
            </div>
            <Link to={`/profile/${users.username}`}>
          <img
            src={
              users.profilePicture
                ? PF + users.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topImg"
          />
        </Link>
        </div>
    </div>
  )
}
 
export default Topbar