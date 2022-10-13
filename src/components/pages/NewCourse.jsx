import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewCourse(props){

    const [form, setForm] = useState({
        title: '',
        createdBy: '',
        price: '',
        description: '',
        photoLink: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.currentUser) {
            navigate(`/login`);
        }
        else {
            setForm({...form, createdBy: props.currentUser.id});
        }
    }, []);

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`, form);
            // navigate back to /courses to see the new course
            navigate(`/courses/${response.data._id}`);
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return(

        <div className="flex justify-center pt-20 max-w-full" >
            <div className=" p-6 rounded-lg shadow-lg bg-white md:mx-auto md:w-7/12 max-w-full">

                
                <h5 className="text-gray-900 text-2xl leading-tight font-medium mb-2">Create a New Course</h5>    

                <p>{errorMessage}</p>
                         
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>            
                    <div>
                        <label htmlFor='title' className=" font-bloom-sans text-grey-800 block mb-2 text-sm font-medium  ">Title</label>
                        <input
                            type='text'
                            id='title'
                            value={form.title}
                            placeholder='Title of the Course'
                            onChange={e => setForm({ ...form, title: e.target.value })}
                            className= "bg-white-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  " 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='price' className="block mb-2 text-sm font-medium font-bloom-sans text-bloom-grey">Price</label>
                        <input 
                            type='number'
                            id='price'
                            value={form.price}
                            placeholder='Price of Course'
                            onChange={e => setForm({ ...form, price: e.target.value })}
                            className= "bg-white-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5  " 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='photoLink' className="block mb-2 text-sm font-bloom-sans text-bloom-grey">Picture</label>
                        <input 
                            type="url"
                            id='photoLink'
                            value={form.photoLink}
                            placeholder="https://image_url.com"
                            onChange={e => setForm({ ...form, photoLink: e.target.value })}
                            className= "bg-white-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5  " 
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='description' className="block mb-2 text-sm font-bloom-sans text-bloom-grey">Description</label>
                        <textarea 
                            type='text'
                            id='description'
                            value={form.description}
                            placeholder='Enter the Description of the course...'
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            className= "bg-white-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5   " 
                        />
                    </div>

                    <button type="submit" className=" items-center py-2 px-3 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-[#898e59] hover:bg-[#aab161] w-full ">Submit</button>
                </form>
            </div>
        </div>
        

    )
}