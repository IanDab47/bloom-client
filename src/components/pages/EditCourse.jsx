import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function EditCourse(){
    const [form, setForm] = useState({
        title: '',
        price: 0,
        description: '',
        photoLink: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const { courseId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`)
                // console.log(response.data)
                setForm(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getCourse() 
    }, [])

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // axios.put/.post('url', data for the reqeust body)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`, form)
            // navigate back to the details page for this bounty
            navigate(`/courses`)
            
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return(
        <div>
            <h1>Edit Course</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>title:</label>
                    <input
                        type='text'
                        id='title'
                        value={form.title}
                        placeholder='Title'
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='price'>Price:</label>
                    <input 
                        type='number'
                        id='price'
                        value={form.price}
                        placeholder='Price for course'
                        onChange={e => setForm({ ...form, price: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='description'>Description:</label>
                    <input 
                        type='text'
                        id='description'
                        value={form.description}
                        placeholder='Describe your course here'
                        onChange={e => setForm({ ...form, description: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='photoLink'>Link Photos:</label>
                    <input 
                        type='text'
                        id='photoLink'
                        value={form.photoLink}
                        placeholder='enter photo link'
                        onChange={e => setForm({ ...form, photoLink: e.target.value })}
                    />
                </div>

                <button type='submit'>Submit edit</button>
            </form>
        </div>
    )
}