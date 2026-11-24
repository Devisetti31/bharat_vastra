
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Traditional Silk Saree",
            category: "Women's Wear",
            price: 2499,
            quantity: 1,
            image: "https://placehold.co/150x180?text=Saree"
        },
        {
            id: 2,
            name: "Men's Casual Shirt",
            category: "Men's Wear",
            price: 999,
            quantity: 2,
            image: "https://placehold.co/150x180?text=Shirt"
        },
        {
            id: 3,
            name: "Kids Ethnic Wear",
            category: "Kids Wear",
            price: 1499,
            quantity: 1,
            image: "https://placehold.co/150x180?text=Kids+Wear"
        }
    ]);

    // Increase Quantity
    const increaseQuantity = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreaseQuantity = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    // Remove Product
    const removeItem = (id) => {
        setCartItems((items) =>
            items.filter((item) => item.id !== id)
        );
    };

    // Calculate Subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const deliveryCharge = subtotal > 0 ? 50 : 0;
    const total = subtotal + deliveryCharge;

    return (
        <div className="cart-page">

            {/* Header */}
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <p>Home / Shopping Cart</p>
            </div>

            <div className="cart-container">

                {/* Cart Products */}
                <div className="cart-products">

                    <h2>Your Cart ({cartItems.length} Items)</h2>

                    {cartItems.length > 0 ? (

                        cartItems.map((item) => (

                            <div className="cart-item" key={item.id}>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-product-image"
                                />

                                <div className="cart-product-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                    <h4>₹{item.price.toLocaleString('en-IN')}</h4>
                                </div>

                                <div className="quantity-control">

                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                <div className="cart-item-total">
                                    <h4>
                                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                    </h4>

                                    <button
                                        className="remove-btn"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="empty-cart">
                            <h2>Your Cart is Empty!</h2>
                            <p>Looks like you haven't added anything to your cart yet.</p>
                            <Link to="/" className="continue-shopping">
                                Continue Shopping
                            </Link>
                        </div>

                    )}

                    {cartItems.length > 0 && (
                        <Link to="/" className="continue-shopping">
                            ← Continue Shopping
                        </Link>
                    )}

                </div>

                {/* Order Summary */}
                {cartItems.length > 0 && (

                    <div className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery Charge</span>
                            <span>₹{deliveryCharge}</span>
                        </div>

                        <div className="summary-row total-row">
                            <strong>Total</strong>
                            <strong>₹{total.toLocaleString('en-IN')}</strong>
                        </div>

                        <button
                            className="checkout-btn"
                            onClick={() => alert('Checkout page coming soon!')}
                        >
                            Proceed to Checkout
                        </button>

                        <p className="secure-message">
                            🔒 Safe and Secure Shopping
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Cart;
