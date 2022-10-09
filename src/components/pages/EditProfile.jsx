import axios from "axios"
import { useEffect } from "react"

export default function EditProfile({ currentUser, setCurrentUser }) {
  // State

  // Hooks
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)

      console.log(response.data)
    }
    getUserDetails()
  }, [])

  return (
    <div>
        <h1>This is EditProfile</h1>


    </div>
  )
}