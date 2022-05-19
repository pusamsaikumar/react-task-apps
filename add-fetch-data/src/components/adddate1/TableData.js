import React,{useState,useEffect} from 'react'
import UserData from './UserData';

function TableData() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://gorest.co.in/public/v2/users').then((response)=>response.json())
        .then((res)=>{
            setUsers(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const addRows=(data)=>{
        const totalData=users.length;
        data.id=totalData - 2407;
        const updateNewData=[...users];
        updateNewData.push(data);
        setUsers(updateNewData);
    }
  return (
    <div className='container'>
                 <UserData function={addRows} />      

            <div className='table-container' style={{flaot:'left'}}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item,index)=>{
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.status}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
             </div>
    </div>
  )
}

export default TableData;