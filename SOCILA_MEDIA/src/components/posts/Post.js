import React, { useState ,useEffect} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../DummyData';
import './post.css';
import axios from 'axios';

function Post({post}) {
  console.log(post);
  // to find the username in users data using this filter method concept
  //  const user = Users.filter(user => user.id === 1);
  //  console.log(user[0].username)
 const [like,setLike] = useState(post.like);
 const [isLiked,setIsLiked] = useState(false);
 const [user,setUser] = useState({});
  
  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }
  // const url ="http://localhost:5000/users/631cde4358fb6ba67c58dc27"
  const url = `http://localhost:5000/users/${post.userId}`

  useEffect(()=>{
    const fetchUser =  async () =>{
      try{
        const res = await axios.get(url);
        setUser(res.data)
      }catch(err){

      }
      
    };
    fetchUser();
  },[])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  return (
    <div className='post'>
      <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>
            <img src={user.profilePicture || PF+"/person/01.jpeg"} alt="" className="postProfileImg" />
                {/* <img src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" /> */}
                {/* <span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span> */}

                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon />
            </div>

          </div>
          <div className='postCenter'>
              <span className="postText">
               {post.desc}
              </span>
              <img src={PF+post.photo} alt="" className='postImg' />
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