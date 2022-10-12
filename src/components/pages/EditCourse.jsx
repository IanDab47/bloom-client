import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function EditCourse({currentUser}){
    const [form, setForm] = useState({
        title: '',
        price: 0,
        description: '',
        photoLink: '',
        _id:'',
        createdBy: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const { courseId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`)
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
    if (currentUser && currentUser.id !== form.createdBy) {
		navigate(`/courses/${courseId}`);
	}
    return(
        <div className= "flex flex-col h-screen justify-center items-center">
            

            <p>{errorMessage}</p>

            {/* <form onSubmit={handleSubmit}>
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
            </form> */}

            <div className=" p-4 w-full max-w-sm bg-white rounded-lg border shadow-sm sm:p-6 md:p-8 bg-[#b9c1a6]">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
        <h5 className="text-xl font-bloom-sans text-bloom-grey font-bold text-center "><u>Edit Your Course Here</u></h5>
        <h4 className="text-xl font-bloom-sans text-bloom-grey font-bold text-center ">{form.title}</h4>
        <div>
        <label htmlFor='title' className=" font-bloom-sans text-bloom-grey block mb-2 text-sm font-medium  ">Title</label>
                    <input
                        type='text'
                        id='title'
                        value={form.title}
                        placeholder=''
                        onChange={e => setForm({ ...form, title: e.target.value })}
                        className= " font-bloom-sans border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
        </div>
        <div>
        <label htmlFor='price' className="block mb-2 text-sm font-medium font-bloom-sans text-bloom-grey">Price</label>
                    <input 
                        type='number'
                        id='price'
                        value={form.price}
                        placeholder='Price of course'
                        onChange={e => setForm({ ...form, price: e.target.value })}
                        className= " font-bloom-sans border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                        
                    />
        </div>
        <div>
                    <label htmlFor='photoLink' className="block mb-2 text-sm font-bloom-sans text-bloom-grey">Picture</label>
                    <input 
                        type='text'
                        id='photoLink'
                        value={form.photoLink}
                        placeholder='Enter picture link address here'
                        onChange={e => setForm({ ...form, photoLink: e.target.value })}
                        className= " font-bloom-sans border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                    />
                </div>
                <div>
                    <label htmlFor='description' className="block mb-2 text-sm font-bloom-sans text-bloom-grey">Description</label>
                    <textarea 
                        type='text'
                        id='description'
                        value={form.description}
                        placeholder='Describe your course here'
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        className= " font-bloom-sans border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#373e3d] dark:placeholder-gray-400 dark:text-white"
                    />
                </div>
        <button type="submit" className=" items-center py-2 px-3 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-[#898e59] hover:bg-[#aab161] w-50 ">Confirm Edit</button>
        <Link  to={`/courses/${form._id}`}><button className="   items-center py-2 px-3 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-red-700 hover:bg-red-600 w-50 ">cancel</button></Link>
    </form>
</div>
        </div>
    )
}