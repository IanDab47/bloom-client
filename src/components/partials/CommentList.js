import Comment from "./Comment";

export default function CommentList({comments, currentUser, handleCommentDelete}) {
    const commentComponents = comments.map((comment, index) => {
        return (
            <Comment 
                comment={comment}
                key={`comment-${index}`}
                currentUser={currentUser}
                handleCommentDelete={handleCommentDelete}
            />
        );
    });
    return (
        <div className="mt-8">
            <h3 className="font-bold">({comments.length}) Comments:</h3>
            {commentComponents}
        </div>
    );
}


