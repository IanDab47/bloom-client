import { Link } from "react-router-dom";

function CourseActionButtons({currentUser, course, handleDelete, addToCart}) {
    return (
        <div>
            {/* is the current user the creator of this course? yes/no */}
            {currentUser.id === course.createdBy ?
                <>
                    <Link to={`/courses/${course._id}/edit`}>Edit</Link>
        
                    {" | "}
        
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </>
                :
                <>
                    <button onClick={addToCart}>
                        Add to cart
                    </button>
                </>
            }
        </div>
    );
}

export default CourseActionButtons;
