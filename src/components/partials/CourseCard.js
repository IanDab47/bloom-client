import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CourseCard({course}) {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const getUser = async () => {
            const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${course.createdBy}`);
            setUsername(userResponse.data.name);
        }
        getUser();
    });
    return (
        <div className="min-w-[300px] bg-white rounded-lg border border-gray-200 shadow-md bg-[#b9c1a6] ">
            <Link to={`/courses/${course._id}`} >
                <img className="rounded-t-lg" src={course.photoLink} alt="" />
            </Link>
            
            <div className="p-4">
            <Link to={`/courses/${course._id}`} >
                <h5 className="mb-2 text-2xl font-bold font-bloom-sans italic  tracking-tight text-bloom-grey ">{course.title}</h5>
            </Link>
            
            <Link to={`/users/${course.createdBy}`} >
                <p className="mb-2 font-normal hover:text-stone-200 font-bloom-sans text-bloom-grey">{username}</p>
            </Link>
            
            <Link to={`/courses/${course._id}`} className="inline-flex items-center py-2 px-2 text-sm font-medium font-bloom-sans text-center text-white rounded-lg bg-[#898e59] hover:bg-[#aab161]">
                Learn more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            </div>
        
    </div>
    );
}

export default CourseCard;
