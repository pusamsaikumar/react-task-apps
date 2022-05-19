import React,{useState} from 'react'


function UserData(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('');
    const [status,setStatus]=useState('');
    const addData=(e)=>{
        e.preventDefault();
        const val={name,email,gender,status}
        props.function(val);
        setName('');
        setEmail('');
        setGender('');
        setStatus('');
        console.log({name,email,gender,status})
    }
    
  return (
    <div>
        <h1>Take the input filed data here:</h1>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> <br></br><br></br>
        <label>E-MAIL:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br></br><br></br>
        <label>GENDER:</label>
        <input type='text' value={gender} onChange={(e)=>setGender(e.target.value)} /> <br></br><br></br>
        <label>STATUS:</label>
        <input type='text' value={status} onChange={(e)=>setStatus(e.target.value)} /> <br></br><br></br>
        <button onClick={addData}>ADD</button>
</div>
  )
}

export default UserData;