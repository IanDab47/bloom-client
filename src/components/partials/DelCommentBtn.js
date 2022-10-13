function DelCommentBtn({comment, currentUser, handleCommentDelete}) {
    return (
        <div>{" | "}
            {currentUser && currentUser.id === comment.commenter._id ? 
                <button className="text-gray-300 italic hover:text-red-600" onClick={() => handleCommentDelete(comment._id)}>
                    Delete
                </button>
                :
                null
            }
        </div>
    );
}

export default DelCommentBtn;
