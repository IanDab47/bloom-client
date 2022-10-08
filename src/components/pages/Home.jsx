import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/course`)
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
    
    const courseLinks = courses.map(course => {
        return (
            <div key={course._id}>
                <Link to={`/courses/${course._id}`}>{course.name}</Link>
            </div>
        )
})

    return(
        <div>
            <h1>Welcome to the Bloom App</h1>

            <h1>INSERT SLIDER CAROUSEL SLIDER</h1>

            {courseLinks}

            <p>{errorMessage}</p>
        </div>
    )
}