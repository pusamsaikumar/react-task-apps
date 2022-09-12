import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css';

function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>
                <img src="assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Sai Kumar</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon />
            </div>

          </div>
          <div className='postCenter'>
              <span className="postText">
                Hey, its my fisrt post:)
              </span>
              <img src="/assets/post/1.jpeg" alt="" className='postImg' />
          </div>
          <div className="postBottom">
              <div className='postBottomLeft'>
                <img className='likeIcon' src="/assets/like.png" alt="" />
                <img className='likeIcon' src="/assets/heart.png" alt="" />
                <span className='postLikeCounter'>32 people likes it </span>
              </div>
              <div className="postBottomRight">
                    <span className='postComment'>9 comments</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Post