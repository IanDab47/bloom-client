import { useState } from "react";
import { Link } from "react-router-dom";

function CourseActionButtons({currentUser, course, handleDelete, addToCart}) {
    const [inCart, setInCart] = useState(false);
    return (
        <div>
            {/* is the current user the creator of this course? yes/no */}
            {currentUser && currentUser.id === course.createdBy ?
                <>
                    <Link to={`/courses/${course._id}/edit`}>Edit</Link>
        
                    {" | "}
        
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </>
                :
                inCart ?
                    <>
                        <p className="text-green-500">Added to cart</p>
                    </>
                :
                    <>
                        <button onClick={() => {addToCart(); setInCart(true)}} className="px-5 py-1.5 rounded-lg font-bloom-sans text-lg text-stone-50 bg-bloom-olive hover:bg-[#9aa161]">
                            Add to cart
                        </button>
                    </>
            }
        </div>
    );
}

export default CourseActionButtons;
