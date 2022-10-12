import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Login({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, reqBody)

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
		return <Navigate to={`/users/${currentUser.id}`} />
	}

	return (
		<div>
			<p>{msg}</p>

			<section className="h-screen">
				<div className="container px-6 py-12 h-full">
					<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
						<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
							<img
							src="/loginNew.svg"
							className="w-full"
							alt="Phone image"
							/>
						</div>

						<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
							<form onSubmit={handleSubmit}>
								<p>Login to your Account:</p>
								<br></br>

								{/* <!-- Email input --> */}
								<div className="mb-6 ">
									<input 
										type="email"
										id="email"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Email address"
										onChange={e => setEmail(e.target.value)}
										value={email}
										required
									/>
								</div>

								{/* <!-- Password input --> */}
								<div className="mb-6">
									<input 
										type="password"
										id="password"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Password"
										onChange={e => setPassword(e.target.value)}
										value={password}
										required
									/>
								</div>

								{/* <!-- Submit button --> */}
								<button
									type="submit"
									className="inline-block px-7 py-3 bg-[#898e59] hover:bg-[#aab161] text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:bg-[#b7bf61] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#b7bf61] active:shadow-lg transition duration-150 ease-in-out w-full"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
								>
									Sign in
								</button>

								{/* <div
									className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
								>
									<p className="text-center font-semibold mx-4 mb-0">OR</p>
								</div> */}
							</form>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}