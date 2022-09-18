import React, { useRef } from 'react';
import './login.css';

function Login() {
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email.current.value,password.current.value)
  }
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
            <button className='loginBtn'>Login In</button>
            <span className='forgotPwd'>Forgot Password?</span>
            <button className='loginRegisterBtn'>Create a New Account </button>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login