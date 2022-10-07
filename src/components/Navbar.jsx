import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
			{/* if the user is logged in... */}
			<Link to="/">
				<span onClick={handleLogout}>logout</span>
			</Link>

			<Link to="/profile/:userId">
				Profile
			</Link>
            
			<Link to='/courses/new'>
				Create New Course
			</Link>

			<Link to='/users/:id/cart'>
				View Cart
			</Link>
            
		</>
	 )

	 const loggedOut = (
		<>
			{/* if the user is not logged in... */}
			<Link to="/register">
				register
			</Link>

			<Link to="/login">
				login
			</Link>
		</>
	 )

	return (
		<nav>
			{/* user always sees this section */}
			<Link to="/">
				<p>User App</p>
			</Link>

			{currentUser ? loggedIn : loggedOut}

			<li>
                    <Link to='/'>Home</Link>
            </li>

			<li>
                    <Link to='/courses'>Courses</Link>
            </li>

		</nav>
	)
}