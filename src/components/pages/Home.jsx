import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from "../partials/Carousel";
import CourseList from "../partials/CourseList";

export default function Home(){
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
        <div className="flex flex-col items-start">
            <h1 className="self-center">Welcome to the Bloom App</h1>

            <h1 className="self-center">INSERT SLIDER CAROUSEL SLIDER</h1>
            <Carousel />

            <h3 className="mt-8 text-xl font-medium">Featured</h3>
            <CourseList courses={courses} />

            <p>{errorMessage}</p>
        </div>
    )
}