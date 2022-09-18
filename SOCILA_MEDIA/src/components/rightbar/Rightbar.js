import React, { useContext, useEffect, useState } from 'react';
import Online from '../online/Online';
import {Users} from '../../DummyData';
import {AuthContext} from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './rightbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 const {users:currentUser,dispatch} = useContext(AuthContext)

  
  const HomeRightbar =()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img src={`${PF}/gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other Friends</b> have a <b>birthday</b> today.
          </span>
        </div>
        <img src={`${PF}/ad.png`} alt="" className="rightbarAd" />
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

    const [friends,setFriends] = useState([]);
    const [followed,setFollowed] = useState(currentUser.followings.includes(user?.id));

    useEffect(()=>{
      const getFriends = async()=>{
        try{
          const friendList = await axios.get('http://localhost:5000/users/friends/' + user._id);
          setFriends(friendList.data)
        }catch(err){
          console.log(err);
        }
      }
    getFriends();
},[user])

// follow and unfollow users
useEffect(()=>{
setFollowed(  currentUser.followings.includes(user?.id))
},[currentUser,user.id])

 const handleClick= async()=>{
    try{
        if(followed){
          await axios.put('http://localhost:5000/users/' + user._id + '/unfollow',{userId:currentUser._id})
            dispatch({
              type:'UNFOLLOW',
              payload:user._id
            })
        } else{
          await axios.put('http://localhost:5000/users/' + user._id + '/follow',{userId:currentUser._id})
          dispatch({
            type:'FOLLOW',
            payload:user._id
          })
        }
    }catch(err){
      console.log(err);
    }
    setFollowed(!followed)
 }

    return (
      <>
      {
        user.username !== currentUser.username && (
          <button className='rightbarFollowBtn' onClick={handleClick} >
            {followed ? "UnFollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
           
          </button>
        )
      }
          <h4 className='rightbaruserTitle'>User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City : </span>
              <span className="rightbarInfoValue">{user.city}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From : </span>
              <span className="rightbarInfoValue">{user.from}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship : </span>
              <span className="rightbarInfoValue">{
              user.relationship === 1 ?  "Single"
               :  user.relationship === 2 ?  "Married" : "-"
               }
               </span>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
              {
                friends.map((friend)=>(
                  <Link to = {"/profile/" + friend.username} style={{textDecoration:'none'}}>
                  <div className="rightbarFollowing">
                  <img src={friend.profilePicture ? PF+friend.profilePicture : PF+'/person/noAvata.png'} alt="" className="followingImg" />
                  <span className="followingName">{friend.username}</span>
                </div>
                  </Link>
                  
                ))
              }
             
              
            
            </div>

          </div>
      </>
    )
  } 
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
     {
      user ?   <ProfileRightbar style={{flex:9}}  /> : <HomeRightbar />
     }
      </div>
    </div>
  )
}

export default Rightbar