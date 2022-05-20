import React,{useState} from 'react'

function EditTableData() {
    const [editFormData,setEditFormData]=useState({
        id:'',
        name:'',
        email:'',
        gender:'',
        status:''
    });
const fnSubmit=(e)=>{
    e.preventDefault();
    const newFormValues={
        id:editFormData.id,
        name:editFormData.name,
        email:editFormData.email,
        gender:editFormData.gender,
        status:editFormData.status
    }
    setEditFormData(newFormValues)
}

  return (
<tr>
<td>
        <input type='text' value={editFormData.id}  placeholder='enter a id' onChange={(e)=>setEditFormData({...editFormData,id:e.target.value})}></input>
    </td>

    <td>
        <input type='text' value={editFormData.name}  placeholder='enter a name' onChange={(e)=>setEditFormData({...editFormData,name:e.target.value})}></input>
    </td>
    <td>
        <input type='emai' value={editFormData.email} placeholder='enter a email' onChange={(e)=>setEditFormData({...editFormData,email:e.target.value})}></input>
    </td>
    <td>
        <input type='text'value={editFormData.gender}  placeholder='enter a gender' onChange={(e)=>setEditFormData({...editFormData,gender:e.target.value})}></input>
    </td>
    <td>
        <input type='text' value={editFormData.status}placeholder='enter a status' onChange={(e)=>setEditFormData({...editFormData,status:e.target.value})}></input>
    </td>
    <td>
        <button onClick={fnSubmit} >save</button>
    </td>
</tr>
  )
}

export default EditTableData;