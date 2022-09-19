

import React, { useContext } from "react"
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter,Routes,Route, Link,Navigate} from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messsenger/Messenger";

function App() {
  const {users} = useContext(AuthContext);
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ users ? <Home /> : <Register />} />
      <Route path="/login" element={users ? <Navigate replace to='/'/> : <Login />} /> 
      <Route path="/register" element={users ?  <Navigate replace to='/' /> : <Register />} />  
      <Route path="/messenger" element={!users ? <Navigate replace to='/' /> : <Messenger />} />      
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
    
}

export default App;


// Redirect in react-router-dom v6 "Navigate" is used to redirect specified path
// const {user}=useContext(AuthContext)
{/* <Route path ='/login' element={users ? <Navigate repalce to='/' : <Login />} */}