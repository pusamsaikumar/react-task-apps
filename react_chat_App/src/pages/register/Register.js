import axios from 'axios';
import React,{useRef} from 'react';
import './register.css';
import {useNavigate} from 'react-router-dom';

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
          const res=  await axios.post('http://localhost:5000/auth/register',user);
         navigate("/login");
         console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
      <div className="loginLeft">
          <h4 className="loginLogo"> Sai Media</h4>
          <span className="loginDesc">Connect with friends and around a world with SaiSocial Media</span>
      </div>
      <div className="loginRight">
        <form className="loginBox" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" required placeholder='User Name' className='loginInput'ref={username} />
            <input type="email" required  placeholder='Email' className='loginInput' ref={email} />
            <input type="password" required minLength="6" placeholder='Password' className='loginInput' ref={password} />
            <input type="password" required placeholder='Password Again' className='loginInput' ref={passwordAgain} />
            <button className='loginBtn' type='submit'>Sign Up</button>
            <button className='loginRegisterBtn' onClick={
              ()=>navigate('/login')
            }>Login into Account</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register