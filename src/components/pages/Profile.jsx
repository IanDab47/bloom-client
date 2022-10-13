// Dependencies
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import btn from "../../bloomStyles"

// Partials
import MyCourses from '../partials/MyCourses'
import PaidCourses from '../partials/PaidCourses'

export default function Profile({ currentUser, handleLogout }) {
	// States
  const navigate = useNavigate()
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

  const deleteUser = async () => {
    try {
      // Deletes User
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`)
      // Logout user from deleted account
      handleLogout()
      // Return Home
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const userOptions = () => {
    return (
      <div className='flex flex-col sm:gap-8 font-bloom-sans font-light text-4xl italic sm:mt-12 sm:mr-20'>
        <Link className={`sm:w-56 lg:w-64 bg-bloom-gold text-right pr-6 py-2 sm:rounded-tr-sm sm:rounded-br-2xl`} to={`edit`}>Edit Profile</Link>

        <Link className={`sm:w-56 lg:w-64 bg-bloom-red text-right pr-6 py-2 sm:rounded-tr-sm sm:rounded-br-2xl text-stone-50 drop-shadow-lg`} to='/' onClick={deleteUser}>Delete Profile</Link>
      </div>
    )
  }

  // Output
	return (

		<div className='mx-auto' >
      <div className='flex flex-col-reverse sm:flex-row'>
        {currentUser && currentUser.id === userId ? userOptions() : <h3></h3> }

        <section className='h-64 xl:h-80 w-full sm:w-4/5 sm:max-w-[55rem] bg-bloom-sage font-bloom-sans sm:rounded-bl-[3em] pt-10 pl-6 md:px-12 xl:px-24 ml-auto'>
          <h1 className='text-5xl font-heavy mb-6'>Profile Details </h1>
          <h3 className='text-2xl my-2 md:text-3xl'>Username: {userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1)}</h3>
          <h3 className='text-2xl my-2 md:text-3xl'>Email: {userDetails.email}</h3>
          {/* <p>your email is {userDetails.email}</p> */}
        </section>
      </div>

      <div className='overflow-x-scroll'>
          <MyCourses 
            myCourses={myCourses}
          />
      </div>

      <div className='overflow-x-scroll'>
        <PaidCourses 
          paidCourses={paidCourses}
        />
      </div>

    </div>
	)
}