import { useState, useEffect } from "react";
import axios from "axios";

function Cart(props) {
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const getCartItems = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${props.currentUser.id}`);
                console.log(response)
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
    return (
        <div>
            cart
            {errorMessage}
        </div>
    );
}

export default Cart;
