import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import btn from "../../bloomStyles"

function CourseCard({course, myEmpty, paidEmpty}) {
    const [username, setUsername] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
              if(!myEmpty && !paidEmpty) {
                const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${course.createdBy}`)
                setUsername(userResponse.data.name)
              }
            } catch(err) {
              console.log(err)
            }
        }
        getUser()
    }, [])

    const myCallToAction = () => {
      return (
        <div className="aspect-square flex flex-col justify-center items-center gap-8 min-w-[330px] max-w-[330px] bg-opacity-30 bg-stone-300 font-bloom-sans text-center rounded-lg shadow-lg ml-5">
          <h3 className="text-4xl leading-snug px-6">Make Your First Course <span className="font-bold">Now!</span></h3>
          <Link className={`${btn} text-2xl max-w-2/3`} to='/courses/new'>New Course</Link>
        </div>
      )
    }

    const paidCallToAction = () => {
      return (
        <div className="aspect-square flex flex-col justify-center items-center gap-8 min-w-[330px] max-w-[330px] bg-opacity-30 bg-stone-500 font-bloom-sans text-center rounded-lg shadow-lg ml-5">
          <h3 className="text-4xl font-light text-stone-50 leading-snug px-6">Purchase Your First Course <span className="font-medium">Here!</span></h3>
          <Link className={`${btn} text-2xl max-w-2/3`} to='/courses'>Browse Courses</Link>
        </div>
      )
    }

    const courseCard = () => {
      return (
        <div className="aspect-square min-w-[330px] max-w-[330px] bg-white rounded-lg border border-stone-300 shadow-lg bg-bloom-sage ml-5">
            <Link to={`/courses/${course._id}`}>
                <img className="rounded-t-lg" src={course.photoLink} alt="" />
            </Link>
            
            <div className="flex flex-col p-4">
                <Link to={`/courses/${course._id}`}>
                    <h5 className="mb-1 text-3xl font-bold font-bloom-sans italic tracking-tight text-bloom-gray ">{course.title}</h5>
                </Link>
                
                <Link to={`/users/${course.createdBy}`}>
                    <p className="mb-2 text-lg font-normal hover:text-stone-200 font-bloom-sans text-bloom-gray">{username}</p>
                </Link>
                
                <Link to={`/courses/${course._id}`} className="inline-flex items-center mt-auto py-2 px-4 text-lg w-36 font-normal font-bloom-sans text-stone-50 rounded-lg bg-bloom-olive hover:bg-[#9aa161]">
                    Learn more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip="evenodd"></path></svg>
                </Link>
            </div>
        </div>
      )
    }

    return (
        <>
          {
            // Runs if myCourses array is empty
            myEmpty   ? myCallToAction()   :
            
            // Runs if purchasedCourses array is empty
            paidEmpty ? paidCallToAction() :
            
            // Displays cards like normal
            courseCard()
          }
        </>
    )
}

export default CourseCard