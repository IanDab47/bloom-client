import { useParams, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'
import CourseActionButtons from "../partials/CourseActionButtons";
import CommentList from '../partials/CommentList'

export default function Course(props){

    const [form, setForm] = useState({
        content: '',
        commenter: ''
    })
    const [course, setCourse] = useState({comments:[],
                                            title:'',
                                            createdBy:'',
                                            price: 0,
                                            photoLink: '',
                                            _id:'',
                                            description: ''})

    const [errorMessage, setErrorMessage] = useState('')

    const { courseId } = useParams()
    const navigate = useNavigate()
    


    useEffect(() => {
        const getCourse = async () => {
            try {
                //axios to the back end to get course
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`)
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
            // after deletion, navigate back to /courses
            navigate('/courses')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    const addToCart = async () => {
        try { 
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${props.currentUser.id}/cart/${courseId}` )
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}/comments`, form);
            // clear comment input element
            setForm({content: "", commenter: props.currentUser.id});
            // update course with new comment included
            setCourse(response.data);
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

            <CourseActionButtons 
                currentUser={props.currentUser}
                course={course} 
                handleDelete={handleDelete} 
                addToCart={addToCart} 
            />

            <div>
                <h2><strong>Title:</strong> {course.title}</h2>

                <img src={course.photoLink} alt={course.title} width="200" height="80" />

                <p><strong>Price:</strong> ${course.price}</p>

                <p><strong>Description:</strong> {course.description}</p>

                
                
                <CommentList comments={course.comments} />
                           
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex flex-col">
                        <label htmlFor='content'>comment:</label>
                        <textarea 
                            id='content'
                            rows="3"
                            placeholder="What are your thoughts?"
                            value={form.content}
                            onChange={e => setForm({content: e.target.value, commenter: props.currentUser.id})} 
                            onKeyDown={e => {if (e.code === "Enter") handleSubmit(e)}}
                        >
                        </textarea>
                    </div>
                    <button type='submit'>Comment</button>
                </form>
            </div>

        </div>

    )
}

