// Dependencies
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Partials
import MyCourses from '../partials/MyCourses'
import PaidCourses from '../partials/PaidCourses'

export default function Profile({ currentUser, handleLogout }) {
	// States
  const { userId } = useParams()
  const [msg, setMsg] = useState('')
  const [myCourses, setMyCourses] = useState([])
  const [paidCourses, setPaidCourses] = useState([])
  const [userDetails, setUserDetails] = useState({
    name: currentUser.name,
    email: currentUser.email,
    password: '',
    myCourses: [],
    purchasedCourses: [],
    shoppingCart: []
  })
    
	// Hooks
	useEffect(() => {
		const fetchData = async () => {
				try {
					// get the token from local storage
					const token = localStorage.getItem('jwt')
					// make the auth headers
					const options = {
						headers: {
							'Authorization': token
						}
					}
          
					// hit the auth locked endpoint
					const authResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)

          const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`)
					// example POST with auth headers (options are always last argument)
					// await axios.post(url, requestBody (form data), options)
					// set the secret user message in state

					setMsg(authResponse.data.msg)
          
          setUserDetails(userResponse.data)
          
          await getMyCourses(userResponse.data.myCourses)
          await getPaidCourses(userResponse.data.purchasedCourses)

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
			fetchData()
	}, []) // only fire on the first render of this component

  // Handlers
  const getMyCourses = async (paidCourses) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api-v1/courses`

    let courseArr = paidCourses.map(courseId => axios.get(`${url}/${courseId}`))
    courseArr = await Promise.all(courseArr)

    courseArr = courseArr.map(response => response.data)

    setMyCourses(courseArr)
  }

  const getPaidCourses = async (myCourses) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api-v1/courses`

    let courseArr = myCourses.map(courseId => axios.get(`${url}/${courseId}`))
    courseArr = await Promise.all(courseArr)

    courseArr = courseArr.map(response => response.data)

    setPaidCourses(courseArr)
  }

  // Maps

  // Output
	return (
		<div>
			{msg ? <Link className='float-right underline' to={`edit`}>edit profile</Link> : <h3>{msg}</h3>}

      <section className='profile'>
        <h1>Hello, {userDetails.name}</h1>
        <p>your email is {userDetails.email}</p>
      </section>

      <MyCourses 
        myCourses={myCourses}
      />

      <PaidCourses 
        paidCourses={paidCourses}
      />

		</div>
	)
}