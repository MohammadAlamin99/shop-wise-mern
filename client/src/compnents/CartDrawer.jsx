import React, { useState } from "react";
const CartDrawer = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tray Table",
      color: "Black",
      price: 19.19,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Tray Table",
      color: "Red",
      price: 19.19,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Table lamp",
      color: "gold",
      price: 39.0,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const total =subtotal;

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  // Function to remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }
  return (
    <div>
 <div className="cart-container">
      <h1 className="cart-title">Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image || "/placeholder.svg"} alt={`${item.name} in ${item.color}`} />
            </div>
            <div className="item-details">
              <div className="item-header">
                <h2 className="item-name">{item.name}</h2>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
              <p className="item-color">Color: {item.color}</p>

              <div className="item-actions">
                <div className="quantity-control">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Subtotal</span>
          <span className="summary-value">${subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row total">
          <span className="summary-label">Total</span>
          <span className="summary-value">${total.toFixed(2)}</span>
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
