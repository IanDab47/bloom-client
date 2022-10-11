// Dependencies
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import jwt_decode from 'jwt-decode'

// Partials
import Navbar from './components/Navbar'
import MyCourses from './components/partials/MyCourses'
import PaidCourses from './components/partials/PaidCourses'

// Pages
import About from './components/pages/About'
import Course from './components/pages/Course'
import EditCourse from './components/pages/EditCourse'
import EditProfile from './components/pages/EditProfile'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import NewCourse from './components/pages/NewCourse'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Courses from './components/pages/Courses'
import Cart from './components/pages/Cart'

export default function App() {
  // State
  const [currentUser, setCurrentUser] = useState(null)

  // Hooks
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  // Handlers
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }
  
  // Output
  return (
    <Router>
      {/* 75% width, center navbar */}
      <header className="relative flex justify-center w-screen bg-bloom-gray mx-auto mt-[-.75rem] z-[1]">
        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      {/* top margin of 24 px away from navbar, 66.66% width, center div */}
      <div className="relative w-screen bg-stone-100 mx-auto">
        <Routes>
          <Route // Landing
            path="/"
            element={<Home />}
          />

          <Route // About
            path="/about"
            element={<About />}
          />

          <Route // Display all courses
            path="/courses" 
            element={<Courses />}
          />

          <Route // Create New Course
            path="/courses/new" 
            element={<NewCourse currentUser={currentUser} />}
          />

          <Route // Display Course Details
            path="/courses/:courseId" 
            element={<Course currentUser={currentUser}  />}
          />

          <Route // Edit Course
            path="/courses/:courseId/edit" 
            element={<EditCourse />}
          />

          <Route // Create Account
            path="/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route // Login to Account
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route // View Account Information
            path="/users/:userId"
            element={currentUser ? <Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/login" />}
          />

          <Route // Edit Account Information
            path="/users/:userId/edit" 
            element={<EditProfile currentUser={currentUser} handleLogout={handleLogout} />}
          />

          <Route // Display all created courses
            path="/users/:userId/my-courses" 
            element={<MyCourses />}
          />

          <Route // Display all purchased courses
            path="/users/:userId/paid-courses" 
            element={<PaidCourses />}
          />

          <Route // Show Cart Details
            path="/users/:userId/cart/" 
            element={currentUser ? <Cart handleLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />}
          />

        </Routes>
      </div>
    </Router>
  )
}