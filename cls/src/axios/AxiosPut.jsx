import axios from 'axios';
import React, { useState } from 'react'

const AxiosPut = () => {

  const [userId, setUserId] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateData = {
      name: newName,
      email: newEmail
    }
    try{
      const response = await axios.put (`https://jsonplaceholder.typicode.com/users/${userId}`, updateData);
        console.log(response.data);
        setMessage("user update successfully")
    } catch (error) {
      console.error(error);
      setMessage("Error updating user")
      
    }

  }
  return (
    <div>
      <h2>Update User</h2>

      <form onSubmit={handleUpdate}>
        
        <input type="text" placeholder='User id to update' value={userId}
          onChange={(e) => setUserId(e.target.value)} /> <br /><br />

        {/* name */}
        <input type="text" placeholder='new name' value={newName}
          onChange={(e) => setNewName(e.target.value)} /> <br /><br />
        {/* email */}
        <input type="text" placeholder='new email' value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)} /> <br /><br />
        <button type='submit'>Update</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default AxiosPut
