import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	const loggedIn = () => {
    return (
      <div className="flex gap-2">
        {/* if the user is logged in... */}
        <Link to='/courses/new' className='hover:text-bloom-sage focus:text-bloom-olive'>
          Create New Course
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}/cart`} className='hover:text-bloom-sage focus:text-bloom-olive'>
          View Cart
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}/`} className='hover:text-bloom-sage focus:text-bloom-olive'>
          Profile
        </Link>{" | "}

        <Link to="/" className='hover:text-bloom-sage focus:text-bloom-olive'>
          <span onClick={handleLogout}>Logout</span>
        </Link>

      </div>
    )
  }
		

	const loggedOut = () => {
    return (
      <div className="flex gap-2">
        {/* if the user is not logged in... */}
        <Link to="/register" className='hover:text-bloom-sage focus:text-bloom-olive'>
          register
        </Link>{" | "}

        <Link to="/login" className='hover:text-bloom-sage focus:text-bloom-olive'>
          login
        </Link>
      </div>
    )
  }

	return (
		<nav className="relative top-0 flex justify-between items-end w-screen h-20 max-w-[90%] bg-bloom-gray font-bloom-sans text-lg text-stone-50 px-8 py-2">
			{/* user always sees this section */}
      <div className="flex items-end gap-2">
        <Link to="/">
          <img src='/bloom-logo.png' alt='BLOOM' title='BLOOM-Logo' className='object-fit-cover h-12 mr-4 mb-1.5'/>
        </Link>

        <Link to='/courses' className='hover:text-bloom-sage focus:text-bloom-olive'>Browse</Link>{" | "}

        <Link to='/about' className='hover:text-bloom-sage focus:text-bloom-olive'>About</Link>
      </div>

      {currentUser ? loggedIn() : loggedOut()}

		</nav>
	)
}