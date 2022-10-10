import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function EditProfile({ currentUser, handleLogout }) {
  // State
  const { userId } = useParams()
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    myCourses: [],
    purchasedCourses: [],
    shoppingCart: []
  })

  // Hooks
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`)
  
        setUserDetails(response.data)
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
  }, [])

  // Handler
  const handleChange = (e, name) => {
    console.log(e.target.value, userDetails)
  }

  return (
    <div>
        <h1>This is EditProfile</h1>

        <form>
          
          <div>
            <label htmlFor="name">Enter your new username: </label>
            <input type='text' id="name" name="name" value={userDetails.name} onChange={e => handleChange(e, 'name')} />
          </div>

          <div>
            <label htmlFor="email">Enter your new email: </label>
            <input type="email" id="email" name="email" value={userDetails.email} onChange={e => handleChange(e, 'email')} />
          </div>

          <div>
            <label htmlFor="password">Enter you new password: </label>
            <input type="password" id="password" name="password" value={userDetails.password} onChange={e => handleChange(e, 'password')} />
          </div>

        </form>
    </div>
  )
}