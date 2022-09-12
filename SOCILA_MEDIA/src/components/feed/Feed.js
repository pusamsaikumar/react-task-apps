import React from 'react';
import Post from '../posts/Post';
import Share from '../share/Share';
import './feed.css';

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper' style={{padding:20}}>
          <Share />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          
      </div>
    </div>
  )
}

export default Feed