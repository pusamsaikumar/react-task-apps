
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/tapbar/Topbar';
import Feed from '../../components/feed/Feed';

import './profile.css';
import Rightbar from '../../components/rightbar/Rightbar';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
    <Topbar />
      <div className='home-container'>
          <div className="profile">
               <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                  <img src={`${PF}/post/3.jpeg`} alt="" className="profileCoverImg" />
                  <img src={`${PF}/person/7.jpeg`} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                  <span className="profileName">Sai Kumar</span>
                  <span className="profileDesc">Hellow My dear Friends..</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile />
            </div>
          </div>
          </div>

      
      </div>
    </>
  )
}

export default Profile