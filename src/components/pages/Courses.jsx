import axios from 'axios'
import { useEffect, useState } from 'react'
import CourseSearch from "../partials/CourseSearch";
import CourseList from "../partials/CourseList";

export default function Courses(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState("");
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`)
                // filter course list based on search state
                const filteredCourses = response.data.filter(course => {
                    return course.title.toLowerCase().includes(search.toLowerCase());
                });
                setCourses(filteredCourses);
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)   
                }
            }
        }
        
        getCourses()
    }, [search]);  // fire on page load and on search state update
    return(
        <div className="p-10">
            <h1 className="text-3xl mb-2">All Courses</h1>
            
            <CourseSearch search={search} setSearch={setSearch} />

            <div className='mt-3 flex flex-wrap justify-center gap-8'>
              <CourseList courses={courses} />
            </div>

            <p>{errorMessage}</p>
        </div>
    )
}