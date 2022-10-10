import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewCourse(props){

    const [form, setForm] = useState({
        title: '',
        createdBy:props.currentUser.id,
        price: 0,
        description: '',
        photoLink: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
             await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`, form)
            // navigate back to /courses to see the new course
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
            <h1>New Course</h1>

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

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}