import { useState, useEffect } from "react"
import axios from "axios"

export default function EditProfile({ currentUser, handleLogout }) {
  // State
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
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
  
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

  return (
    <div>
        <h1>This is EditProfile</h1>


    </div>
  )
}