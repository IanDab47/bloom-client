import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart(props) {
    const [cartCourses, setCartCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const getCartItems = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const options = {headers: {'Authorization': token}};
                const authResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options);
                // continue if authorization succeeds
                // get the shoppingCart courses from currentUser
                const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${props.currentUser.id}`);
                let coursesResponse = userResponse.data.shoppingCart.map(courseId => {
                    try {
                        return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/courses/${courseId}`);
                    }
                    catch(error) {
                        console.warn(error);
                        if (error.response) {
                            setErrorMessage(error.response.data.message); 
                        }
                    }
                });
                coursesResponse = await Promise.all(coursesResponse);
                const coursesObjArray = coursesResponse.map(response => response.data);
                // set cartCourses state to an array of course objects
                setCartCourses(coursesObjArray);
            }
            catch(error) {
                console.warn(error);
                if (error.response) {
                    if (error.response.status === 401) {
                        props.handleLogout();
                    }
                    setErrorMessage(error.response.data.message);
                }
            }
        }
        getCartItems();
    }, []);
    const courseComponents = cartCourses.map(course => {
        return (
            <div key={course._id}>
                <Link to={`/courses/${course._id}`}>{course.title}</Link>
            </div>
        );
    });
    return (
        <div>
            cart
            {errorMessage}
            {courseComponents}
        </div>
    );
}

export default Cart;
