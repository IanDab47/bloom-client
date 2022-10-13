import { Link } from "react-router-dom";
import DelCommentBtn from "./DelCommentBtn";

function Comment({comment, currentUser, handleCommentDelete}) {
    const timestampArray = comment.createdAt.split(/[T.]/);
    return (
        <div className="mt-2">
            <div className="flex gap-1">
                <Link to={`/users/${comment.commenter._id}`} className="font-semibold hover:text-stone-500">
                    {comment.commenter.name}
                </Link>
                <p>({timestampArray[0]} {timestampArray[1].slice(0, -3)})</p>
                <DelCommentBtn 
                    comment={comment}
                    currentUser={currentUser}
                    handleCommentDelete={handleCommentDelete}
                />
            </div>
            <p>{comment.content} </p>
        </div>
    );
}

export default Comment;
