import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './chartonline.css';

function ChartOnline({onlineUsers,currentId,setCurrentChat}) {

    const [friends,setFriends] = useState([]);
    const [onlinefriends,setOnlinefriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const getFriends = async()=>{
            const res = await axios.get('http://localhost:5000/users/friends/' + currentId);
            setFriends(res.data)
        };
        getFriends(); 
    },[currentId]);
     console.log(friends)

    //  useEffect(() => {
    //     setOnlinefriends(friends.filter((f) => onlineUsers.includes(f._id)));
    //   }, [friends, onlineUsers]);
    
    console.log(onlineUsers);

    const handleClick = async(user)=>{
        try{
            const res = await axios.get(`http://localhost:5000/conversations/find/${currentId}/${user._id}`);
            setCurrentChat(res.data)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='chartOnline'>
       {
        friends.map((online)=>(
            <div className="chartOnlineFriend" key={online._id} onClick={()=>handleClick(online)} >
            <div className="chartOnlineImgContainer">
            <img src={online?.profilePicture ? PF+ online.profilePicture : PF+'/person/noAvatar.png'} alt="" className="chartOnlineImg" />
                <div className="chartOnlineBadge"></div>
            </div>
            <span className="chartOnlineName">{online?.username}</span>
        </div>
        ))
       }
       
    </div>
  )
}    
             
            
export default ChartOnline;


