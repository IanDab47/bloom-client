import { Link } from "react-router-dom";

function CartItem({course, handleRemoveClick}) {
    return (
        <div className="flex items-center gap-2">
            <Link to={`/courses/${course._id}`}>{course.title}</Link>
            <button onClick={() => handleRemoveClick(course._id)}
                className="w-fit px-2 py-1 border rounded-lg text-white text-sm bg-red-500 hover:bg-red-600">
                Remove
            </button>
        </div>
    );
}

export default CartItem;
