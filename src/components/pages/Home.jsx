import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
    // courses from the backend
    const [courses, setCourses] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses`)

                console.log(response)

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

    console.log(courses)
    
    const courseLinks = courses.map(course => {
        return (
            <div key={course._id} className="border-2 px-4 py-3">
                <Link to={`/courses/${course._id}`}>{course.title}</Link>
            </div>
        )
})

    return(
        <div className="flex flex-col items-start">
            <h1 className="self-center">Welcome to the Bloom App</h1>

            <h1 className="self-center">INSERT SLIDER CAROUSEL SLIDER</h1>
            
                <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        ></button>
                        <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        ></button>
                    </div>
                    
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                            <img
                                src="https://i.imgur.com/NQIawr3.png"
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                                <h5 class="text-xl">Decorated Events</h5>
                                <p>Learn how to spark joy with Curated Experiences</p>
                            </div>
                        </div>

                        <div class="carousel-item relative float-left w-full">
                            <img
                                src="https://i.imgur.com/316ctgo.png"
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                                <h5 class="text-xl">Learn how to Start a Clothing Brand</h5>
                                <p>10 years of Streetwear Brand Experience</p>
                            </div>
                        </div>

                        <div class="carousel-item relative float-left w-full">
                            <img
                                src="https://i.imgur.com/Dh2KLmy.png"
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                                <h5 class="text-xl">Learn how to be an AirBNB Host</h5>
                                <p>Lead with passion and authenticity, then then business aspect will follow.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            <h3 className="font-medium">Featured</h3>
            <div className="flex gap-8">
                {courseLinks}
            </div>

            <p>{errorMessage}</p>
        </div>
    )
}