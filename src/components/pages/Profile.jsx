// Dependencies
import { useState, useEffect } from 'react'
import axios from 'axios'
import { dblClick } from '@testing-library/user-event/dist/click'

export default function Profile({ currentUser, handleLogout }) {
	// States
  const [msg, setMsg] = useState('')
  const [userDetails, setUserDetails] = useState({
    name: currentUser.name,
    email: currentUser.email,
    password: '',
    myCourses: [],
    purchasedCourses: [],
    shoppingCart: []
  })
  const [myCourses, setMyCourses] = useState([])
  const [paidCourses, setPaidCourses] = useState([])
    
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
					// const authResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)

          const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
					// example POST with auth headers (options are always last argument)
					// await axios.post(url, requestBody (form data), options)
					// set the secret user message in state

					// setMsg(authResponse.data.msg)
          
          setUserDetails(userResponse.data)
          
          await getMyCourses(userResponse.data.myCourses)
          await getPaidCourses(userResponse.data.paidCourses)

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

  // iterates through courses
  const myCoursesList = myCourses.map(course => { 
    return (
      <div key={`myCourse_${course._id}_user_${currentUser.id}`} className='course-block'>
        <h3>{course.title}</h3>
      </div>
    )
  })
  
  const paidCoursesList = paidCourses.map(course => {
    return (
      <div key={`paidCourse_${course._id}_user_${currentUser.id}`} className='course-block'>
        <h3>{course.title}</h3>
      </div>
    )
  })

  // Output
	return (
		<div>
			<h3>{msg}</h3>

      <section className='profile'>
        <h1>Hello, {currentUser.name}</h1>
        <p>your email is {currentUser.email}</p>
      </section>

      <div className='course-list'>
        <h2>Here's a list of my courses</h2>
        {myCoursesList}
      </div>

      <div className='course-list'>
        <h2>Here is the secret message that is only availible to users of User App:</h2>
        {paidCoursesList}
      </div>

		</div>
	)
}