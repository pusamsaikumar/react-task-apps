import React from 'react';
import './login.css';

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
      <div className="loginLeft">
          <h4 className="loginLogo"> Sai Media</h4>
          <span className="loginDesc">Connect with friends and around a world with SaiSocial Media</span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
            
            <input type="email" placeholder='Email' className='loginInput' />
            <input type="password" placeholder='Password' className='loginInput' />
      
            <button className='loginBtn'>Login In</button>
            <span className='forgotPwd'>Forgot Password?</span>
            <button className='loginRegisterBtn'>Create a New Account </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login