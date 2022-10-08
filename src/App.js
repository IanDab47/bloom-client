// Dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import jwt_decode from 'jwt-decode'

// Partials
import Navbar from './components/Navbar'
import MyCourses from './components/partials/MyCourses'
import PaidCourses from './components/partials/PaidCourses'

// Pages
import Course from './components/pages/Course'
import EditCourse from './components/pages/EditCourse'
import EditProfile from './components/pages/EditProfile'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import NewCourse from './components/pages/NewCourse'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'

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
      <header>
        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      <div className="App">
        <Routes>
          <Route // Landing
            path="/"
            element={<Home />}
          />

          <Route // Display Course Details
            path="/courses/:courseId" 
            element={<Course />}
          />

          <Route // Create New Course
            path="/courses/:courseId/new" 
            element={<NewCourse />}
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

          {/* conditionally render auth locked routes */}
          <Route // View Account Information
            path="/user/:userId"
            element={currentUser ? <Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/login" />}
          />

          <Route // Edit Account Information
            path="/user/:userId/edit" 
            element={<EditProfile />}
          />

          <Route // Display all created courses
            path="/user/:userId/my-courses" 
            element={<MyCourses />}
          />

          <Route // Display all purchased courses
            path="/user/:userId/paid-courses" 
            element={<PaidCourses />}
          />

          <Route // Show Cart Details
            path="/user/:id/cart/" 
            element={<Profile />}
          />

        </Routes>
      </div>
    </Router>
  )
}