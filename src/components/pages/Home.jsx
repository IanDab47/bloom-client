import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from "../partials/Carousel";
import CourseList from "../partials/CourseList";
import btn from "../../bloomStyles"

export default function Home(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`)
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

    return(
        <div className={`relative lex flex-col`}>

            <div className="flex pt-16">

              <div className='absolute w-screen h-[50%] bg-bloom-sage mt-[-4rem] clip-path-polygon-[0_0,_100%_0,_100%_60%,_0_100%]'>

              </div>

              <div className="relative pl-[5%] w-[45%]">
                <h1 className="self-center font-bloom-sans text-8xl font-light italic text-bloom-gray whitespace-nowrap ">Allow other to blossom<br />alongside you!</h1>
                <p className="self-center text-justify w-[33rem] font-bloom-sans text-3xl font-normal text-bloom-gray whitespace-wrap leading-snug my-4">Create a new course and spread your knowledge to those who are thrilled to find out about what you do!</p>
                <button className={btn}>Create A New Course</button>
              </div>

              <div className="relative self-end w-full rounded-xl mt-40">
                <Carousel />

              </div>

            </div>

            <h3 className="mt-8 text-xl font-medium">Featured Courses</h3>
            <div className="w-5/6 overflow-scroll">
              <CourseList courses={courses} /> 

            </div>

            <p>{errorMessage}</p>
        </div>
    )
}