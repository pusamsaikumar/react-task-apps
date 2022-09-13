import React from 'react';
import Online from '../online/Online';
import {Users} from '../../DummyData';

import './rightbar.css';

function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar =()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img src="/${PF}/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other Friends</b> have a <b>birthday</b> today.
          </span>
        </div>
        <img src="/${PF}/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {
            Users.map((user,index) =>{
              return    <Online user={user} key={index} />
            })
          }
      
        </ul>
      </>
    )
  }
  const ProfileRightbar =()=>{
    return (
      <>
          <h4 className='rightbaruserTitle'>User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City : </span>
              <span className="rightbarInfoValue">Hyderabad</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From : </span>
              <span className="rightbarInfoValue">India</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship : </span>
              <span className="rightbarInfoValue">Single</span>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src={`${PF}/person/1.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/7.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/2.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/3.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/4.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/5.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/6.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/8.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={`${PF}/person/9.jpeg`} alt="" className="followingImg" />
                <span className="followingName">Jhon Carter</span>
              </div>
            </div>

          </div>
      </>
    )
  } 
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
     {
      profile ?   <ProfileRightbar /> : <HomeRightbar />
     }
      </div>
    </div>
  )
}

export default Rightbar