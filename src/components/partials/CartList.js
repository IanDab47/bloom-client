import CartItem from "../partials/CartItem";

function CartList({cartCourses, handleRemoveClick}) {
    const courseComponents = cartCourses.map(course => {
        return (
            <CartItem 
                course={course} 
                key={course._id} 
                handleRemoveClick={handleRemoveClick}
            />
        );
    });
    return (
        <div>
            {courseComponents}
        </div>
    );
}

export default CartList;
