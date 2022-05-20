import React,{useState} from 'react'

function UserInputData(props) {
    const [inputData,setInputData]=useState({
        name:"",
        email:"",
        gender:"",
        status:""
    })
    const dataSubmit=(e)=>{
            e.preventDefault();
            const val={
                name:inputData.name,
                email:inputData.email,
                gender:inputData.gender,
                status:inputData.status
            }
            props.function(val);
            setInputData({name:"",
            email:"",
            gender:"",
            status:""});
    }
  return (
    <div className='user-container' >
        <h2 style={{textAlign:"center"}}>Add new users data here:</h2>
                    
                    <form onSubmit={dataSubmit} >
                    <label>NAME:</label>
                      <input type='text' value={inputData.name}placeholder="enter a name" onChange={(e)=>setInputData({...inputData,name:e.target.value})}/> <br/>
                      <label>E-MAIL:</label>
                      <input type='text'value={inputData.email} placeholder="enter a email"onChange={(e)=>setInputData({...inputData,email:e.target.value})} /><br/>
                      <label>GENDER:</label>
                      <input type='text' value={inputData.gender} placeholder="enter a gender"onChange={(e)=>setInputData({...inputData,gender:e.target.value})}/><br/>
                      <label>STATUS:</label>
                      <input type='text'value={inputData.status} placeholder="enter a status"onChange={(e)=>setInputData({...inputData,status:e.target.value})} /><br/>
                      <button>ADD</button>
                    </form>
                     
    </div>
  )
}

export default UserInputData;