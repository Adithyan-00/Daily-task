import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Data() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/users')
      setData(res.data.users)
    } catch (error) {
      console.error("Error fetching data", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data);
  

  return (
    <div style={{ padding: '20px' }}>
      {data.map((user) => (
        <div key={user.id} style={{ border: '1px solid gray', marginBottom: '15px', padding: '10px', borderRadius: '8px' }}>
          <h3>{user.firstName} {user.lastName}</h3>
          <img src={user.image} alt={user.firstName} width="100" />
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Data
