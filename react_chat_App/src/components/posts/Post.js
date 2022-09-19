import React, { useState ,useEffect,useContext} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../DummyData';
import './post.css';
import axios from 'axios';
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Post({post}) {

  // to find the username in users data using this filter method concept
  //  const user = Users.filter(user => user.id === 1);
  //  console.log(user[0].username)
 const [like,setLike] = useState(post.likes.length);
 const [isLiked,setIsLiked] = useState(false);
 const [user,setUser] = useState({});
 const {users} = useContext(AuthContext)

  useEffect(()=>{
    setIsLiked(post.likes.includes(users._id))
  },[users._id,post.likes])
  const likeHandler = () =>{
      try{
        axios.put('http://localhost:5000/posts/'+ post._id + '/like',{userId :users._id})
      }catch(err){

      }
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }
  //  const url ="http://localhost:5000/users/631cde2d58fb6ba67c58dc25"
  // const url = `http://localhost:5000/users/${post.userId}`

  useEffect(()=>{
    const fetchUser =  async () =>{
     
        const res = await axios.get(`http://localhost:5000/users?userId=${post.userId}`);
        console.log(res)
        setUser(res.data)
     };
    fetchUser();
  },[post.userId])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  return (
    <div className='post'>
      <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>

                    {/* /*form backend */ }
                    {/* / Link to profile page of users / */}
                 <Link to={`/profile/${user.username}`}>
                  <img src= { user.profilePicture ? PF+user.profilePicture : PF+"/person/noAvatar.png"} alt="" className="postProfileImg" />
                  </Link>
                 <span className="postUsername">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
                
                {/* <img src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" /> */}
                {/* <span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span> */}
                {/* <span className="postDate">{post.date}</span> */}
            </div>
            <div className="postTopRight">
                <MoreVertIcon />
            </div>

          </div>
          <div className='postCenter'>
              <span className="postText">
               {post?.desc}
              </span>
              <img src={PF +"/"+post.img} alt="" className='postImg' />
          </div>
          <div className="postBottom">
              <div className='postBottomLeft'>
                <img className='likeIcon' src={`${PF}/like.png`} alt="" onClick={likeHandler} />
                <img className='likeIcon' src={`${PF}/heart.png`} alt="" onClick={likeHandler}  />
                <span className='postLikeCounter'>{like} people likes it </span>
              </div>
              <div className="postBottomRight">
                    <span className='postComment'>{post.comment}</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Post