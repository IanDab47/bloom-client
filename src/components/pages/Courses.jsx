import axios from 'axios'
import { useEffect, useState } from 'react'
import CourseCard from "../partials/CourseCard";

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
    
    const courseCardComponents = courses.map(course => {
        return <CourseCard course={course} key={course._id} />
    });

    return(
        <div>
            <h1 className="text-3xl">All Courses</h1>
            <div className="mt-3 flex gap-8">
                {courseCardComponents}
            </div>

            <p>{errorMessage}</p>
        </div>
    )
}