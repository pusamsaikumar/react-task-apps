
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { addUser ,deleteUser,updateUser } from './redux/fetures/UserSlice';

function App() {
  const userList=useSelector((state)=>state.users.value);
  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [newUsername,setNewUsername]=useState('');
  const dispatch=useDispatch();
 


  return (
    <div className="App">
    <div className='add-user'>
      {' '}
        <input type='text' value={name} name='name' placeholder='Enter Name...' onChange={(e)=>setName(e.target.value)} />
        <input type='text' value={username} name='username' placeholder='Enter UserName..' onChange={(e)=>setUsername(e.target.value)}  />
        <button onClick={(e)=>{
          e.preventDefault();
            dispatch(addUser({
              id:userList[userList.length - 1].id + 1,name,username
            }))
            setName('');
            setUsername('');
        }
       
        }>AddUser</button>
    </div>
    <div className='display-users'>
        {
          userList.map((user)=>{
            return <div key={user.id}>
              <h4> ID: {user.id}</h4>
              <h4>Name: {user.name}</h4>
              <h4>UserName: {user.username}</h4>
              <input type='text' value={newUsername}  placeholder='Enter NewUserName..' onChange={(e)=>setNewUsername(e.target.value)}  />
              <button onClick={
                (e)=>{
                  e.preventDefault();
                  dispatch(updateUser({
                  id:user.id,
                  username:newUsername
                }))
                setNewUsername('')
              }
              } >
                {" "}
                Update User</button>
              <button onClick={()=>
                dispatch(deleteUser({
                  id:user.id
                }))
                }>Delete User</button>

              </div>
          })
        }
    </div>
    </div>
  );
}

export default App;
