import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export default function EditProfile({ currentUser, handleLogout }) {
  // State
  const navigate = useNavigate()
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
      navigate(`/users/${userId}`)
    } catch (err) {
      console.warn(err)
    }
  }
  if (currentUser && currentUser.id !== userId) {
    navigate(`/users/${userId}`);
  }
  return (
        <div className="flex justify-center pt-20 max-w-full" >

          <div className=" p-6 rounded-lg shadow-lg bg-white md:mx-auto md:w-6/12 max-w-full">

            <h5 className="text-gray-900 text-2xl leading-tight font-medium mb-2">Edit Profile</h5>

            <Link className='float-right underline' to={`/users/${userId}`}>Cancel</Link>
              <form onSubmit={editUserDetails}>
                <div>
                    <label htmlFor="name">Enter your new username:</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                      placeholder="your new username"
                      value={name} 
                      onChange={e => handleChange(e, 'name')} 
                      required
                    />
                </div>

                <div>
                  <label htmlFor="email">Enter your new email: </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                    placeholder="youremail@gmail.com"
                    value={email} 
                    onChange={e => handleChange(e, 'email')} 
                    required
                  />
                </div>

                <button className="bg-[#898e59] hover:bg-[#aab161] text-gray-800 font-medium py-1 px-6 border border-gray-400 mt-2 rounded shadow" type="submit">
                  Submit Edit
                </button>
              </form>

          </div>
        </div>
  )
}