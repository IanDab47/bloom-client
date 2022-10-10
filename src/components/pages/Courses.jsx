import axios from 'axios'
import { useEffect, useState } from 'react'
import CourseList from "../partials/CourseList";

export default function Courses(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`)
                setCourses(response.data)  
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)   
                }
            }
        }
        
        getCourses()
    }, [])  // only fire on page load

    return(
        <div>
            <h1 className="text-3xl">All Courses</h1>
            <CourseList courses={courses} />

            <p>{errorMessage}</p>
        </div>
    )
}