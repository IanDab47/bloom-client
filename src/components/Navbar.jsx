import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	const loggedIn = () => {
    return (
      <div className="flex gap-2">
        {/* if the user is logged in... */}
        <Link to='/courses/new'>
          Create New Course
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}/cart`}>
          View Cart
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}/`}>
          Profile
        </Link>{" | "}

        <Link to="/">
          <span onClick={handleLogout}>logout</span>
        </Link>

      </div>
    )
  }
		

	const loggedOut = () => {
    return (
      <div className="flex gap-2">
        {/* if the user is not logged in... */}
        <Link to="/register">
          register
        </Link>{" | "}

        <Link to="/login">
          login
        </Link>
      </div>
    )
  }

	return (
		<nav className="flex justify-between">
			{/* user always sees this section */}
      <div className="flex gap-2">
        <Link to="/">
          <p>User App</p>
        </Link>{" | "}

        <Link to='/'>Home</Link>{" | "}

        <Link to='/courses'>Courses</Link>
      </div>

      {currentUser ? loggedIn() : loggedOut()}

		</nav>
	)
}