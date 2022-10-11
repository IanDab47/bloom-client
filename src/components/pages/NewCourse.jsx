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
        <div class= " flex flex-col h-screen justify-center items-center">
           

            <p>{errorMessage}</p>

                <div class=" p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 md:p-8 bg-[#b9c1a6]">
    <form class="space-y-6" action="#" onSubmit={handleSubmit}>
        <h5 class="text-xl font-bloom-sans text-bloom-grey font-bold ">Make New Course Here</h5>
        <div>
        <label htmlFor='title' class=" font-bloom-sans text-bloom-grey block mb-2 text-sm font-medium  ">Title</label>
                    <input
                        type='text'
                        id='title'
                        value={form.title}
                        placeholder='Title'
                        onChange={e => setForm({ ...form, title: e.target.value })}
                        class= " font-bloom-sans border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
        </div>
        <div>
        <label htmlFor='price' class="block mb-2 text-sm font-medium font-bloom-sans text-bloom-grey">Price</label>
                    <input 
                        type='number'
                        id='price'
                        value={form.price}
                        placeholder='Price of course'
                        onChange={e => setForm({ ...form, price: e.target.value })}
                        class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                        
                    />
        </div>
        <div>
                    <label htmlFor='photoLink' class="block mb-2 text-sm font-bloom-sans text-bloom-grey">Picture</label>
                    <input 
                        type='text'
                        id='photoLink'
                        value={form.photoLink}
                        placeholder='Enter picture link address here'
                        onChange={e => setForm({ ...form, photoLink: e.target.value })}
                        class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                    />
                </div>
                <div>
                    <label htmlFor='description' class="block mb-2 text-sm font-bloom-sans text-bloom-grey">Description</label>
                    <textarea 
                        type='text'
                        id='description'
                        value={form.description}
                        placeholder='Describe your course here'
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        class= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                    />
                </div>
        <button type="submit" class=" items-center py-2 px-3 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-[#898e59] hover:bg-[#373e3d] w-full ">Make Course</button>
        
    </form>
</div>


        </div>

    )
}