import React, { useState } from "react";
const CartDrawer = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tray Table",
      color: "Black",
      price: 19.19,
      quantity: 2,
      image:
        "https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png",
    },
    {
      id: 2,
      name: "Tray Table",
      color: "Red",
      price: 19.19,
      quantity: 2,
      image:
        "https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png",
    },
    {
      id: 3,
      name: "Table lamp",
      color: "gold",
      price: 39.0,
      quantity: 2,
      image:
        "https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png",
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal;

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="cart-container">
        <div className="cart-text-wrapper">
        <h3 className="cart-title">Cart</h3>
        <svg
          className="cart-close"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#6C7275"
          />
        </svg>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} in ${item.color}`}
                />
              </div>
              <div className="item-details">
                <div className="item-header">
                  <h2 className="item-name">{item.name}</h2>
                  <span className="item-price">TK. {item.price.toFixed(2)}</span>
                </div>
                <p className="item-color">Color: {item.color}</p>

                <div className="item-actions">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="#6C7275"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span className="summary-label">Subtotal</span>
            <span className="summary-value">TK. {subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span className="summary-label">Total</span>
            <span className="summary-value">TK. {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button className="checkout-btn">Checkout</button>
          <a href="#" className="view-cart-link">
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
