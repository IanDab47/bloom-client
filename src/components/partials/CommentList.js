export default function CommentList({comments}) {
    const comment = comments.map((comment, index) => {
        return <p key={`comment-${index}`}> {comment.content} <strong>commenter:</strong>{comment.commenter.name}</p>
    });
    return (
        <div>
            <h3><strong>Comments:</strong></h3>
            {comment}
        </div>
    );
}


