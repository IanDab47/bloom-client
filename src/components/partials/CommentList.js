import Comment from "./Comment";

export default function CommentList({comments}) {
    const commentComponents = comments.map((comment, index) => {
        return (
            <Comment 
                comment={comment}
                key={`comment-${index}`}
            />
        );
    });
    return (
        <div>
            <h3><strong>Comments:</strong></h3>
            {commentComponents}
        </div>
    );
}


