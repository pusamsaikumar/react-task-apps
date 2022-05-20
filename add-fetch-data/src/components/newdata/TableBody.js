import React from 'react'

function TableBody({user,handleEditClick,handleDeleteButton}) {
  return (
    <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.gender}</td>
    <td>{user.status}</td>
    <td>
        <button onClick={(e)=>handleEditClick(e,user)}>Edit</button>
    </td>
    <td>
        <button onClick={()=>handleDeleteButton(user.id)}>Edit</button>
    </td>
    <td>
        <button>Delete</button>
    </td>
</tr>
  )
}

export default TableBody