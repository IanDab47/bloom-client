function Comment({comment}) {
    return (
        <div>
            <p>commenter: {comment.commenter.name}</p>
            <p>{comment.content} </p>
        </div>
    );
}

export default Comment;
