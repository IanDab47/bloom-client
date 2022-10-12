import DelCommentBtn from "./DelCommentBtn";

function Comment({comment, currentUser, handleCommentDelete}) {
    const timestampArray = comment.createdAt.split(/[T.]/);
    return (
        <div className="mt-2">
            <div className="flex gap-1">
                <p className="font-semibold">{comment.commenter.name}</p>
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
