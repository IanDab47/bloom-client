import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewCourse(props){

    const [form, setForm] = useState({
        title: '',
        createdBy:props.currentUser.id,
        price: '',
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

        <div class="flex justify-center mt-20 max-w-full" >
            <div class=" p-6 rounded-lg shadow-lg bg-white md:mx-auto md:w-7/12 max-w-full">
                <h5 class="text-gray-900 text-2xl leading-tight font-medium mb-2">Create a New Course</h5>    

                <p>{errorMessage}</p>
                         
                <form class="space-y-6" action="#" onSubmit={handleSubmit}>            
                    <div>
                        <label htmlFor='title' class=" font-bloom-sans text-grey-800 block mb-2 text-sm font-medium  ">Title</label>
                        <input
                            type='text'
                            id='title'
                            value={form.title}
                            placeholder='Title of the Course'
                            onChange={e => setForm({ ...form, title: e.target.value })}
                            class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='price' class="block mb-2 text-sm font-medium font-bloom-sans text-bloom-grey">Price</label>
                        <input 
                            type='number'
                            id='price'
                            value={form.price}
                            placeholder='Price of Course'
                            onChange={e => setForm({ ...form, price: e.target.value })}
                            class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='photoLink' class="block mb-2 text-sm font-bloom-sans text-bloom-grey">Picture</label>
                        <input 
                            type='text'
                            id='photoLink'
                            value={form.photoLink}
                            placeholder='Enter link to picture here'
                            onChange={e => setForm({ ...form, photoLink: e.target.value })}
                            class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='description' class="block mb-2 text-sm font-bloom-sans text-bloom-grey">Description</label>
                        <textarea 
                            type='text'
                            id='description'
                            value={form.description}
                            placeholder='Enter the Description of the course...'
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>

                    <button type="submit" class=" items-center py-2 px-3 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-[#898e59] hover:bg-[#aab161] w-full ">Submit</button>
                </form>
            </div>
        </div>
        

    )
}