import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	const loggedIn = () => {
    return (
      <>
        {/* if the user is logged in... */}
        <Link to="/">
          <span onClick={handleLogout}>logout</span>
        </Link>

        <Link to={`/users/:userId`}>
          Profile
        </Link>
              
        <Link to='/courses/new'>
          Create New Course
        </Link>

        <Link to='/users/:userId/cart'>
          View Cart
        </Link>
              
      </>
    )
  }
		

	const loggedOut = () => {
    return (
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
  }

	return (
		<nav>
			{/* user always sees this section */}
			<Link to="/">
				<p>User App</p>
			</Link>

			{currentUser ? loggedIn() : loggedOut()}

			<li>
                    <Link to='/'>Home</Link>
            </li>

			<li>
                    <Link to='/courses'>Courses</Link>
            </li>

		</nav>
	)
}