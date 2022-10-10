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
        <Link to={`/courses/${course._id}`} >
            <div className="flex flex-col border-2 px-4 py-3">
                    <p className="font-semibold">{course.title}</p>
                    <p className="text-gray-500">{username}</p>
                    <p className="font-semibold">${course.price}</p>
            </div>
        </Link>
    );
}

export default CourseCard;
