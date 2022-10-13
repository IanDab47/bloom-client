import { Link } from 'react-router-dom'
import Hamburger from './partials/Hamburger'

export default function Navbar({ currentUser, handleLogout }) {
	const loggedIn = () => {
    return (
      <div className="hidden lg:flex gap-0 absolute opacity-0 lg:gap-3 lg:relative lg:opacity-100">
        {/* if the user is logged in... */}
        <Link to='/courses/new' className='hover:text-bloom-sage focus:text-bloom-olive'>
          Create New Course
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}/cart`} className='hover:text-bloom-sage focus:text-bloom-olive'>
          View Cart
        </Link>{" | "}

        <Link to={`/users/${currentUser.id}`} className='hover:text-bloom-sage focus:text-bloom-olive'>
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
      <div className="flex gap-3 absolute opacity-0 left-0 lg:relative lg:opacity-100">
        {/* if the user is not logged in... */}
        <Link to="/register" className='hover:text-bloom-sage focus:text-bloom-olive'>
          Register
        </Link>{" | "}

        <Link to="/login" className='hover:text-bloom-sage focus:text-bloom-olive'>
          Login
        </Link>
      </div>
    )
  }

	return (
		<nav className="relative top-0 flex justify-between items-end w-screen h-20 max-w-[90%] bg-bloom-gray font-bloom-sans text-xl font-light text-stone-50 px-0 py-2">
			{/* user always sees this section */}
      <div className="flex items-end gap-3">
        <Link to="/">
          <img src='/bloom-logo.png' alt='BLOOM' title='BLOOM-Logo' className='object-cover h-[90%] max-h-12 mr-4 mb-1.5'/>
        </Link>

        <div className='flex gap-2 absolute opacity-0 lg:relative lg:opacity-100'>
          <Link to='/courses' className='hover:text-bloom-sage focus:text-bloom-olive'>Browse</Link>{" | "}

          <Link to='/about' className='hover:text-bloom-sage focus:text-bloom-olive'>About</Link>

        </div>
      </div>

      <Hamburger
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      {currentUser ? loggedIn() : loggedOut()}

		</nav>
	)
}