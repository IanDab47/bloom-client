function CheckoutBtn({handleCheckoutClick}) {
    return (
        <button onClick={handleCheckoutClick} className="w-fit px-2 py-1 border rounded-lg text-white bg-bloom-olive hover:bg-blue-600">
            Checkout
        </button>
    );
}

export default CheckoutBtn;
