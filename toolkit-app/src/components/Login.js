import React,{useState,useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux';
import {reset,login} from './feauters/auth/AuthSlice';
import Spinner from '../components/Spinner';
import {useNavigate} from 'react-router-dom';

function Login() {
    const {user,isError,isLoading,isSuccess,message} = useSelector((state)=>state.auth);
    const [formData,setFormData] = useState({
        email:'',
        password:'',
      
    })
    const {password,email}=formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
// const onChange=(e)=>{
//     e.preventDefault();
//     setFormData(
//         (prevState)=>({
//             ...prevState,
//             [e.target.name]:e.target.value
//         })
//     )
// }

useEffect(()=>{
    if(isError){
        toast.error(message)
    }
    if(isSuccess || user){
        navigate('/')
    }
    dispatch(reset())
},[user,isError,isSuccess,message,dispatch,navigate])


    const submitLogin=(e)=>{
        e.preventDefault();
        dispatch(login( {
         
            email,
           password
           }))
        
      setFormData({
        email:'',password:''
      })
 
    }
    if(isLoading){
        return <Spinner />
    } 
  return (
 <>
    <section className='heading'>
        <h1><FaSignInAlt /> Login</h1>
        <p>Please login  account to start setting goals </p>
    </section>
    <section>
        <form onSubmit={submitLogin}>
           
            <div className='form-group'>
                <input type='email' name='email' id='email' className='form-control' value={email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='Enter Your Email' />
            </div>
            <div className='form-group'>
                <input type='password' name='password' id='password' className='form-control' value={password} onChange={(e)=>setFormData({...formData,password:e.target.value})} placeholder='Enter Password' />
            </div>
   
            <div className='form-group'>
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
 
 </>
  )
}

export default Login;