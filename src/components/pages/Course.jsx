import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Course(){
    const [course, setCourse] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const { courseId } = useParams()
    const navigate = useNavigate()
    console.log(courseId)

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`)
                // console.log(response.data)
                setCourse(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getCourse() 
    }, [])
    
    const handleDelete = async () => {
        try {
            // axios to the backend to delete this Course
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`)
            // after deletion, navigate back to /bounties
            navigate('/courses')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return(
        <div>
            <h1>Course Details</h1>

            <p>{errorMessage}</p>

            <div>
                <Link to={`/courses/${courseId}/edit`}>
                    <button>Edit</button>
                </Link>

                {" | "}

                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>

            <div>
                <h1>Title: {course.title}</h1>

                <p>Price: {course.price}</p>

                <p>Description: {course.description}</p>

                <p>Photo: <img src={course.photoLink} alt={course.title} width="200"
         height="80"/></p>
            </div>

        </div>
           

    )
}