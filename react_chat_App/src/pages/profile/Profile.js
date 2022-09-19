
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/tapbar/Topbar';
import Feed from '../../components/feed/Feed';

import './profile.css';
import Rightbar from '../../components/rightbar/Rightbar';
import axios from 'axios';
import { Users } from '../../DummyData';
import {useParams} from 'react-router-dom';

function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users,setUsers] = useState({});
  const {username} = useParams();
  //console.log(username)

  useEffect(()=>{
    const fetchUsers = async()=>{
      const res = await axios.get(`http://localhost:5000/users?username=${username}`);
      setUsers(res.data);
      }
      fetchUsers();
  },[username])

  return (
    <>
    <Topbar />
      <div className='home-container'>
          <div className="profile">
               <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src={users.coverPicture  ? PF + users.coverPicture : PF+'/person/noCover2.png'} alt="" className="profileCoverImg" />
                  <img src={users.profilePicture ? PF+ users.profilePicture  : PF+'/person/noAvatar3.png'} alt="" className="profileUserImg" />
                
                </div>
                <div className="profileInfo">
                  <span className="profileName">{users.username}</span>
                  <span className="profileDesc">{users.desc }</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}  />
                <Rightbar user={users}  />
            </div>
          </div>
          </div>

      
      </div>
    </>
  )
}

export default Profile