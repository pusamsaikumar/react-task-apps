import React, { useContext, useRef } from 'react';
import { LoginCall } from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';

import CircularProgress from '@mui/material/CircularProgress';





import './login.css';

function Login() {
  const email = useRef();
  const password = useRef();

  const {users,isLoading,error,dispatch} = useContext(AuthContext);
  const handleSubmit = (e,) =>{
    e.preventDefault();

    LoginCall({
      email:email.current.value,password:password.current.value
    },dispatch);
}
  console.log(users)
  return (
    <div className='login'>
      <div className="loginWrapper">
      <div className="loginLeft">
          <h4 className="loginLogo"> Sai Media</h4>
          <span className="loginDesc">Connect with friends and around a world with SaiSocial Media</span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
            <form className='loginBox'onSubmit={handleSubmit} >
            <input type="email" required placeholder='Email' className='loginInput' ref={email} />
            <input type="password" required  placeholder='Password' className='loginInput' minLength="6"  ref={password} />
            {/* <button className='loginBtn'>{isLoading ? "Loading..." : "Log In"}</button> */}
            <button className='loginBtn' disabled={isLoading}>
              {
              isLoading ? <CircularProgress style={{color:'darkblue'}} size={20}/> : "Log In"
              }
              </button>
            <span className='forgotPwd'>Forgot Password?</span>
            <button className='loginRegisterBtn'>
                {
                  isLoading ? <CircularProgress style={{color:'darkred'}} size={15} /> : " Create a New Account "       
                 }
              </button>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login