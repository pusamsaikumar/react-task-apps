import { SettingsInputCompositeSharp } from '@mui/icons-material';
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Post from '../posts/Post';
import Share from '../share/Share';
// import {Posts} from '../../DummyData';
import './feed.css';

function Feed() {
  const [posts,setPosts] = useState([]);
const url ="http://localhost:5000/posts/timeline/631cde2d58fb6ba67c58dc25"
  useEffect(()=>{
    const fetchPost =  async () =>{
      try{
        const res = await axios.get(url);
       
        setPosts(res.data)
      }catch(err){

      }
      
    };
    fetchPost();
  },[])
  return (
    <div className='feed'>
      <div className='feedWrapper' style={{padding:20}}>
          <Share />
          {posts.map(p =>(
            <Post post={p} key={p.id} />
          ))}
       
      </div>
    </div>
  )
}

export default Feed