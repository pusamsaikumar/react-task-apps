import React,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import {createpost} from './redux/PostSlice';


function CreatePost() {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const {loading,postlist} = useSelector((state)=>state.posts);
  console.log(postlist);
  const [values,setValues] = useState({
    title:'',
    body:''
  });
  const {title,body} = values;
 const submitHandler =(e)=>{
  e.preventDefault();
  console.log({title:values.title,body:values.body})
  if(!title || !body){
    toast.error('please enter title and body fields..');
  }
  dispatch(createpost({
    // title:values.title,
    // body:values.body
    values
  }))
  setValues({ title:'',body:''});

 }
  return (
   <>
    <div>
      <h1 className='text-center text-white bg-dark mt-4 mb-4 '>Create Post</h1>
      <form action=''>
      <div className="mb-3">
        <input type="text" className="form-control" value={values.title}  placeholder='write title here...' onChange={(e)=>setValues({...values,title:e.target.value})} />
      </div>
      <div className="form-floating">
        <textarea type="text" className="form-control" value={values.body}  placeholder="Leave a comment here"  onChange={(e)=>setValues({...values,body:e.target.value})}></textarea>
        <label for="floatingTextarea">Add Post here...</label>
      </div>
      <div className='mt-4 d-flex align-items-end justify-content-end'>
                          <button className="btn btn-primary" onClick={()=>navigate('/')}>Go Home</button>
                          <button type='submit' className="btn btn-danger ms-4" onClick={submitHandler}>Submit</button>
                      </div>
      </form>
    </div>
    <div className='container'>
    <>
    {
        loading ? (
          <div className="spinner-border text-secondary" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
        ) : (
          (
             <>
             {
              postlist.title && (
                <>
                <div className='container ml-8'>
                  <div className="card col-md-8 mt-4 ">
                    <div className="card-body">
                      <h6 className="card-title">ID : <b>{postlist.id}</b></h6>
                      <p className="card-title">TITLE :<b>{postlist.title}</b></p>
                       <p className="card-text">BODY :<b>{postlist.body}</b></p>
                      
                    </div>
                  </div>
                </div>
                </>
              )
             }
             </>
             )
          
    
        )
      }
    
    </>
    </div>
   </>
  )
}

export default CreatePost