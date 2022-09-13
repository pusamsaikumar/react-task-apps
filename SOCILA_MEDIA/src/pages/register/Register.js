import React from 'react';
import './register.css';

function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
      <div className="loginLeft">
          <h4 className="loginLogo"> Sai Media</h4>
          <span className="loginDesc">Connect with friends and around a world with SaiSocial Media</span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          
            <input type="text" placeholder='User Name' className='loginInput' />
            <input type="email" placeholder='Email' className='loginInput' />
            <input type="password" placeholder='Password' className='loginInput' />
            <input type="password" placeholder='Password again' className='loginInput' />
            <button className='loginBtn'>Sign Up</button>
           
            <button className='loginRegisterBtn'>Login into Account</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Register