function DelCommentBtn({comment, currentUser, handleCommentDelete}) {
    return (
        <div>
            {currentUser && currentUser.id === comment.commenter._id ? 
                <button className="bg-red-500 text-white" onClick={() => handleCommentDelete(comment._id)}>
                    Delete
                </button>
                :
                null
            }
        </div>
    );
}

export default DelCommentBtn;
