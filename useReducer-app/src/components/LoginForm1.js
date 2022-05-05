import React, {useState} from 'react';

function LoginForm1() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loggedIn,setLoggedIn]=useState(false);
    const [error,setError]=useState(false);

    const handleSubmitForm=(e)=>{
        e.preventDefault();
      if(username==="saikumar" && password === "pusam123"){
          console.log('success');
        setLoggedIn(true);
        setUsername('');
        setPassword('');
      } else{
          console.log('error');
          setError('invalid username/password');
      }
    }

  return (
      <>
{
    loggedIn ? 
    <div>
    <h1>You have successfully login</h1>
    <button onClick={()=>{
        setLoggedIn(false);
        setError(false);
    }}>Logout</button>
</div> 
:
<form onSubmit={handleSubmitForm} autoComplete='off'>
<p className='red'>{error}</p>
<input type="text" value={username} name='username' placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
<input type='password' value={password} name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}  />
<button>Submit</button>
</form>
}
</>
   
  )
}

export default LoginForm1;