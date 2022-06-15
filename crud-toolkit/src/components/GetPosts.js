import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getpost} from './redux/postSlice';
import {useNavigate} from 'react-router-dom';

function GetPosts() {
    const  dispatch = useDispatch();
    const navigate = useNavigate();
    const {postlist,error} =useSelector((state)=>state.posts);
    console.log(postlist);
  return (
   <div className='container mt-4'>
    <div className='col-md-8'>
         <h4>Get Post Data Here:</h4>
    
       {
        error && <h4>{error}</h4>
       }
         <table style={{marginTop:'20px',marginBottom:'10px'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    postlist.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
          <button type="button" class="btn btn-primary" onClick={()=>
            dispatch(getpost())
        }>Get Post</button>
        <button type="button" class="btn btn-info ms-4" onClick={()=>
            navigate('/')
        }>Go Back</button> <br></br><br></br>
        <hr></hr>
        <div class="spinner-border text-danger" role="status">
             <span class="visually-hidden">Loading...</span>
        </div>
    </div>
   
   </div>
  )
}

export default GetPosts