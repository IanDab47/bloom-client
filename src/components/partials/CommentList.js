import axios from "axios";
import { useState } from "react";

export default function CommentList({comments}) {
    const [user, setUser] = useState('')
    const comment = comments.map((comment) => {
        //get commenter name
        const getUser = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${comment.commenter}`)
            setUser(response.data.name) 
        }
        getUser()
        // console.log(user)
        return <p> {comment.content} <strong>commenter:</strong>{user}</p>
    });
    return (
        <div>
            <h3><strong>Comments:</strong></h3>
            {comment}
        </div>
    );
}


