function CheckoutBtn({handleCheckoutClick}) {
    return (
        // <button onClick={handleCheckoutClick} className="w-fit px-2 py-1 border rounded-lg text-white bg-bloom-olive hover:bg-[#aab161]">
        <button onClick={handleCheckoutClick} className="w-fit px-6 py-1.5 text-xl font-bloom-sans text-stone-50 border rounded-lg bg-bloom-olive hover:bg-[#9aa161]">
            Checkout
        </button>
    );
}

export default CheckoutBtn;