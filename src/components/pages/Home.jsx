import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`)

                console.log(response)

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

    console.log(courses)
    
    const courseLinks = courses.map(course => {
        return (
            <div key={course._id} className="border-2 px-4 py-3">
                <Link to={`/courses/${course._id}`}>{course.title}</Link>
            </div>
        )
})

    return(
        <div className="w-8/12 mx-auto flex flex-col items-start">
            <h1 className="self-center">Welcome to the Bloom App</h1>

            <h1 className="self-center">INSERT SLIDER CAROUSEL SLIDER</h1>

            <h3 className="font-medium">Featured</h3>
            <div className="flex gap-8">
                {courseLinks}
            </div>

            <p>{errorMessage}</p>
        </div>
    )
}