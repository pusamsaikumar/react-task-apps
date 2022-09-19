import React from 'react';
import './closeFriend.css';

function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className='sidebarfriend'>
    <img className='sidebarfriendImg' src={PF+user.profilePicture} alt={user.username} />
    <span className='sidebarfriendName'>{user.username}</span>
  </li>
  )
}

export default CloseFriend