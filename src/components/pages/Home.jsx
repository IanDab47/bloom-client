import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "../partials/Carousel"
import CourseList from "../partials/CourseList"
import btn from "../../bloomStyles"

export default function Home(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')
    const [windowSize, setWindowSize] = useState(window.innerWidth)

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

    useEffect(() => {
      const handleResize = () => setWindowSize(window.innerWidth)

      window.addEventListener('resize', handleResize)

      return _ => window.removeEventListener('resize', handleResize)
    }, [windowSize])

    const isWide = windowSize > 1536
    const isThird = windowSize > 1280
    const isHalf = windowSize > 1024
    const isSmall = windowSize > 768
    const isPhone = windowSize > 640

    return (
        <div className={`relative flex flex-col overflow-x-hidden`}>

            <div className={`flex ${!isWide ? 'flex-col-reverse' : ''} pt-16`}>

              <div className={`absolute w-screen h-[50%] bg-bloom-sage mt-[-4rem] ${isWide ? 'clip-path-polygon-[0_0,_100%_0,_100%_65%,_0_100%]' : isPhone ? 'clip-path-polygon-[0_0,_100%_0,_100%_90%,_0_100%]' : ''}`}></div>

              <div className={`relative pb-12 pl-[5%] ${isWide ? 'w-[45%]' : 'w-[90]'}`}>
                <h1 
                  className={`self-center font-bloom-sans font-light italic text-bloom-gray ${isWide ? 'text-8xl whitespace-nowrap' : isPhone ? 'text-7xl' : 'text-5xl'}`}
                >
                  Allow others to blossom {isHalf && !isThird || isWide ? <br /> : ''}alongside you!
                </h1>
                <p 
                  className={`self-center text-justify w-[90%] max-w-[33rem] font-bloom-sans font-normal text-bloom-gray whitespace-wrap leading-snug my-4 ${isWide ? 'text-3xl' : isPhone ? 'text-2xl' : 'text-xl'}`}
                >
                  Create a new course and spread your knowledge to those who are thrilled to find out about what you do!
                </p>
                <Link to='/courses/new' className={`${btn} ${isWide ? 'text-2xl' : 'text-xl'}`}>Create A New Course</Link>
              </div>

              <div className={`relative flex w-screen ${isWide ? 'mt-40 self-end' : `mt-[-4rem] pb-[2rem] justify-center bg-bloom-sage`} px-[${isThird && !isWide ? `mx-auto` : '0rem'}]`}>
                <Carousel isWide={isWide} />
              </div>

            </div>

            <h3 className={`my-8 ${isWide || !isPhone ? 'ml-[12%]' : 'self-end mr-[12%]'} text-xl font-bloom-sans text-5xl font-light italic`}>Featured Courses</h3>
            <div className="self-center w-5/6 overflow-scroll">
              <CourseList courses={courses} /> 
            </div>

            <p>{errorMessage}</p>
        </div>
    )
}