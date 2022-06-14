import React from 'react';
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa';
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {reset,logout} from '../components/feauters/auth/AuthSlice';

function Header() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {user} = useSelector((state)=>state.auth);

  const onLogout =() =>{
    dispatch(logout());
    dispatch(reset());
    navigate('/')
  }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>SAIKUMAR</Link>
        </div>
        <ul>
           {
            user ? ( 
            <li>
               <button className='btn' onClick={onLogout}><FaSignOutAlt />logout</button>
            </li>
            ) 
            : (
                <>
                <li>
                <Link to='/login'><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to='/register'><FaUser />Register</Link>
            </li>
                </>
            )
           }
            
        </ul>
    </header>
  )
}

export default Header