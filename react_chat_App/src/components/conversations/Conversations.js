import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './conversations.css';

function Conversations({conversation,currentUser}) {
  const [user,setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  useEffect(()=>{
     const friendId = conversation.members.find(member => member !== currentUser._id);
     const getUser = async(req,res)=>{
      try{
         const res = await axios.get('http://localhost:5000/users?userId=' + friendId);
        //  console.log(res)
        setUser(res.data)
      }catch(err){
        console.log(err);
      }
     };
     getUser();
  },[conversation,currentUser])

  return (
    <div className='conversation'>
        <img src={user ?  PF + user.profilePicture : PF+'/person/noAvatar2.png'} alt="" className="conversationImg" /> 
         <span className="coversationName" >{user.username}</span>
    </div>
  )
}

export default Conversations