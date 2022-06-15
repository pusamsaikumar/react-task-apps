import React from 'react';
import {useNavigate} from 'react-router-dom';

function Posts() {
  const navigate = useNavigate();
  return (
    <div className='row mt-4 d-flex align-items-center justify-content-center'>
      <div className='col-md-8'>
        <form action=''>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Search By ID</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Please enter id number here..." />
          </div>
          <button type="button" class="btn btn-primary">Fetch Post</button>
          <button type="button" class="btn btn-success ms-2" onClick={()=>navigate('/getposts')}>Get Post</button>
          <button type="button" class="btn btn-primary ms-2">Create Post</button>
        </form>
     
      </div>
    </div>
   
  )
}

export default Posts