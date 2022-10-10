import { useState, useEffect } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import axios from "axios"

export default function EditProfile({ currentUser, handleLogout }) {
  // State
  const { userId } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // Hooks
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`)
  
        setName(response.data.name)
        setEmail(response.data.email)
      } catch (err) {
        // if the error is a 401 -- that means that auth failed
        console.warn(err)
        if (err.response) {
          if (err.response.status === 401) {
            // panic!
            handleLogout()
          }
        }
      }
    }
    getUserDetails()
  }, [userId])

  // Handlers
  const handleChange = (e, filter) => {
    if(filter === 'name') setName(e.target.value)
    if(filter === 'email') setEmail(e.target.value)
  }

  const editUserDetails = async (e) => {
    try {
      e.preventDefault()
  
      await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`, {name, email})
      
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className="leading-6">
			  <Link className='float-right underline' to={`/users/${userId}`}>Cancel</Link>

        <form onSubmit={editUserDetails}>
          <div>
            <label htmlFor="name">Enter your new username: </label>
            <input type='text' id="name" name="name" value={name} onChange={e => handleChange(e, 'name')} />
          </div>

          <div>
            <label htmlFor="email">Enter your new email: </label>
            <input type="email" id="email" name="email" value={email} onChange={e => handleChange(e, 'email')} />
          </div>

          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-6 border border-gray-400 mt-2 rounded shadow" type="submit">Edit</button>

        </form>
    </div>
  )
}