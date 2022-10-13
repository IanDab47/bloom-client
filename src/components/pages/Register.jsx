import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate, Link } from 'react-router-dom'

export default function Register({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				name,
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
 	}

	// conditionally render a navigate component
	if (currentUser) {
		return <Navigate to="/" />
	}

	return (
		<div>
			<p>{msg}</p>
						
			<section className="bg-gray-80 ">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Create an account
							</h1>

							<form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
								<div>
									<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
									<input 
										type="text" 
										name="name" 
										id="name" 
										placeholder="username" 
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
										required=""
										onChange={e => setName(e.target.value)}
										value={name}
									>
									</input>
								</div>
								
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
									<input 
										type="email" 
										name="email" 
										id="email" 
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
										placeholder="name@company.com" 
										required=""
										onChange={e => setEmail(e.target.value)}
										value={email}
									>
									</input>
								</div>
								
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
									<input 
										type="password" 
										name="password" 
										id="password" 
										placeholder="••••••••" 
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
										required=""
										onChange={e => setPassword(e.target.value)}
										value={password}
									>
									</input>
								</div>
								
								<button
									type="submit"
									className="inline-block px-7 py-3 bg-[#898e59] hover:bg-[#aab161] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-[#b7bf61] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#b7bf61] active:shadow-lg transition duration-150 ease-in-out w-full"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
								>
									Sign up
								</button>
								
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>





		</div>
	)
}