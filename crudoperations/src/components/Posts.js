import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { setEdit, updatepost } from "../components/redux/PostSlice";
import {fetchpost,deletepost} from './redux/PostSlice';
import {toast} from 'react-toastify';

function Posts() {
  const [id,setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {postlist,loading,body,edit,title} = useSelector((state)=>state.posts);
  const [bodyText,setBodyText] = useState('');
  const [titleText,setTitleText] = useState('');

  useEffect(()=>{
    if(body,title){
      setBodyText(body);
      setTitleText(title);
    }
  },[body,title]);
 
console.log(postlist)
const handleFetch=(e)=>{
  e.preventDefault();
//  console.log(id);
  if(!id){
    toast.error('please enter valid id number here');
    // alert('please enter valid id number here');
  } else{
    dispatch(fetchpost({id}))
  }
}
 

  return (
    <>
    <div className='row mt-4 d-flex align-items-center justify-content-center'>
      <div  className='col-md-8'>
        <form action=''>
          <div  className="mb-3">
            <label  className="form-label">Search By ID</label>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)}  className="form-control" id="id" placeholder="Please enter id number here..." />
          </div>
         
          <button type="button"  className="btn btn-primary" onClick={handleFetch} >Fetch Post</button>
          <button type="button"  className="btn btn-success ms-2" onClick={()=>navigate('/getposts')}>Get Post</button>
          <button type="button" className="btn btn-primary ms-2"  onClick={()=>navigate('/createpost')}>Create Post</button>
        </form>

        {/* <div  classNameName='table-container'>
        <table>
               <thead>
                 <tr>
                    <th>ID</th>
                    <th>TITTLE</th>
                    <th>BODY</th>
                    <th>Operations</th>
                 </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{postlist.id}</td>
                     <td>{postlist.title}</td>
                     <td>{postlist.body}</td>
                     <button type="button"  className="btn btn-primary">Edit</button>
                     <button type="button"  className="btn btn-danger">Delete</button>
                  </tr>
               </tbody>
            </table>
        </div> */}
     
      </div>
    </div>
    <div className="container">
        {loading ? (
         <>
          <div className="spinner-border text-secondary" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
         </>
        ) : (
          <>
            {postlist.id  && (
              <>
                <div className="card mt-4">
                  <div className="card-body">
                  <p className="card-title"><b>ID:</b>{postlist.id}</p>
                    
                    {edit ? (
                      <>
                       <div className="mb-3">
        <input type="text" className="form-control" value={titleText} onChange={(e) => setTitleText(e.target.value)} />
      </div>
                        <textarea
                          className="form-control"
                          value={bodyText}
                          onChange={(e) => setBodyText(e.target.value)}
                          id="floatingTextarea"
                        />
                        <div className="d-flex align-items-end justify-content-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              dispatch(
                                updatepost({
                                  id: postlist.id,
                                  title: titleText,
                                  body: bodyText,
                                })
                              );
                              dispatch(setEdit({ edit: false, body: "" ,title:''}));
                            }}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-danger ms-4"
                            onClick={() =>
                              dispatch(setEdit({ edit: false, body: "",title:"" }))
                            }
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                      <p className="card-title"><b>TITLE:</b><span>{postlist.title}</span></p>
                        <p className="card-text"><b>BODY</b>:<span>{postlist.body}</span></p>
                      </>
                    )}
                    {!edit && (
                      <div className="d-flex align-items-end justify-content-end">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            dispatch(
                              setEdit({ edit: true, body: postlist.body ,title:postlist.title})
                            )
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger ms-4"
                          onClick={()=>dispatch(deletepost({id:postlist.id}))}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

    </>
   
  )
}

export default Posts;

