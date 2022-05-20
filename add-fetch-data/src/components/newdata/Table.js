
import React,{useEffect,useState} from 'react'
import EditTableData from './EditTableData';
import TableBody from './TableBody';

import UserInputData from './UserInputData';

function Table() {
    const [users,setUsers]=useState([]);
    const [editUserId,setEditUserId]=useState(null);

    const handleDeleteButton=(editUserId)=>{
        const newUserid=[...users];
        const index=users.findIndex((user)=>{
           return  user.id !==editUserId;
           newUserid.splice(index,1);
           setEditUserId(newUserid)
        })
    }



    //   const [editFormData,setEditFormData]=useState({
    //     id:null,
    //     name:'',
    //     email:'',
    //     gender:'',
    //     status:''
    // });

    // const editFormDataChange=(e)=>{
    //     e.preventDefault();
    //     const fieldName=e.target.getAttribute('name');
    //     const fieldValue=e.target.value;
    //     const newFormData=[...editFormData];
    //     newFormData[fieldName]=fieldValue;
    //     setEditFormData(newFormData);
    //    }
   
    useEffect(()=>{
        fetch('https://gorest.co.in/public/v2/users').then((response)=>response.json())
        .then((data)=>{
            setUsers(data)
        })
    },[]);
    const addRows=(data)=>{
        const totalUsers=users.length;
        data.id=totalUsers + 1 ;
        const updateUsers=[...users];
        updateUsers.push(data);
        setUsers(updateUsers)
    }
    const handleEditClick=(e,user)=>{
        setEditUserId(user.id)
       
        // const newFormValues={
        //     id:editUserId.id,
        //     name:editFormData.name,
        //     email:editFormData.email,
        //     gender:editFormData.gender,
        //     status:editFormData.status
        // }
        // setEditFormData(newFormValues)
    }
 
  return (
    
        <div className='table-container'>
          <form>
          <table style={{float:'left'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                          <>
                          {
                              editUserId === user.id ?  <EditTableData /> 
                              :<TableBody  user={user}handleDeleteButton={handleDeleteButton} handleEditClick={handleEditClick}/>

                          }
                         
                          
                          </>
                        ))
                    }
                </tbody>
            </table>
          </form>
            <div className='user'>
                    <UserInputData function={addRows} />
            </div>
        </div>
  
  )
}

export default Table
