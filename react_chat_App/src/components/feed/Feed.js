import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import React,{useContext, useEffect,useState} from 'react';
import Post from '../posts/Post';
import Share from '../share/Share';
// import {Posts} from '../../DummyData';
import './feed.css';

function Feed({username}) {
  const [posts,setPosts] = useState([]);
  const {users} = useContext(AuthContext);

  // post all url = http://localhost:5000/posts/profile/vinay
// const url ="http://localhost:5000/posts/timeline/631cde2d58fb6ba67c58dc25"
  useEffect(()=>{
    const fetchPost =  async () =>{
    
        const res = username ? await axios.get('http://localhost:5000/posts/profile/'+ username) :
        await axios.get('http://localhost:5000/posts/timeline/' + users._id)
       
       setPosts(res.data.sort((postNew,postOld)=>{
            return new Date(postOld.createdAt) - new Date(postNew.createdAt)
       })
       )
    
    };
    fetchPost();
  },[username,users])
  return (
    <div className='feed'>
      <div className='feedWrapper' style={{padding:20}}>
         {(!username || username === users.username) &&  <Share />}
         
          {posts.map((p)=>(
            <Post post={p} key={p._id} />
          ))}
       
      </div>
    </div>
  )
}

export default Feed