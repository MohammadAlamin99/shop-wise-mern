import React, { useState } from "react";

const CartDetails = () => {
  const [products, setProducts] = useState([
    {
      id: "blackTray",
      name: "Tray Table",
      color: "Black",
      price: 19,
      quantity: 2,
    },
    { id: "redTray", name: "Tray Table", color: "Red", price: 19, quantity: 2 },
    {
      id: "tableLamp",
      name: "Table lamp",
      color: "Gold",
      price: 39,
      quantity: 1,
    },
  ]);

  const [shippingMethod, setShippingMethod] = useState("free");

  const handleQuantityChange = (productId, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const calculateSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = shippingMethod === "express" ? 15 : 0;
    return subtotal + shippingCost;
  };

  return (
    <div className="ah-cart-container">
      <h1 className="ah-cart-title">Cart</h1>

      <div className="ah-progress-steps">
        <div className="ah-step ah-active">
          <div className="ah-step-number">1</div>
          <div className="ah-step-label">Shopping cart</div>
        </div>
        <div className="ah-step">
          <div className="ah-step-number">2</div>
          <div className="ah-step-label">Checkout details</div>
        </div>
        <div className="ah-step">
          <div className="ah-step-number">3</div>
          <div className="ah-step-label">Order complete</div>
        </div>
      </div>

      <div className="ah-cart-content">
        <div className="ah-cart-items">
          <div className="ah-cart-header">
            <div className="ah-product-header">Product</div>
            <div className="ah-quantity-header">Quantity</div>
            <div className="ah-price-header">Price</div>
            <div className="ah-subtotal-header">Subtotal</div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="ah-cart-item">
              <div className="ah-product-info">
                <div className="ah-product-image">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt={`${product.color} ${product.name}`}
                  />
                </div>
                <div className="ah-product-details">
                  <div className="ah-product-name">{product.name}</div>
                  <div className="ah-product-color">Color: {product.color}</div>
                  <button
                    className="ah-remove-button"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    <span className="ah-remove-icon">×</span> Remove
                  </button>
                </div>
              </div>
              <div className="ah-quantity-controls">
                <button
                  className="ah-quantity-btn"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  −
                </button>
                <span className="ah-quantity-value">{product.quantity}</span>
                <button
                  className="ah-quantity-btn"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>
              <div className="ah-price">${product.price.toFixed(2)}</div>
              <div className="ah-subtotal">
                ${(product.quantity * product.price).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="ah-cart-summary">
          <h2 className="ah-summary-title">Cart summary</h2>

          <div className="ah-shipping-options">
            <label className="ah-shipping-option">
              <input
                type="radio"
                name="shipping"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
              />
              <span className="ah-shipping-label">Free shipping</span>
              <span className="ah-shipping-price">$0.00</span>
            </label>

            <label className="ah-shipping-option">
              <input
                type="radio"
                name="shipping"
                value="express"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
              />
              <span className="ah-shipping-label">Express shipping</span>
              <span className="ah-shipping-price">+$15.00</span>
            </label>

            <label className="ah-shipping-option">
              <input
                type="radio"
                name="shipping"
                value="pickup"
                checked={shippingMethod === "pickup"}
                onChange={() => setShippingMethod("pickup")}
              />
              <span className="ah-shipping-label">Pick Up</span>
              <span className="ah-shipping-price">%21.00</span>
            </label>
          </div>

          <div className="ah-summary-row">
            <span className="ah-summary-label">Subtotal</span>
            <span className="ah-summary-value">
              ${calculateSubtotal().toFixed(2)}
            </span>
          </div>

          <div className="ah-summary-row ah-total">
            <span className="ah-summary-label">Total</span>
            <span className="ah-summary-value">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>

          <button className="ah-checkout-button">Checkout</button>
        </div>
      </div>

      <div className="ah-coupon-section">
        <h3 className="ah-coupon-title">Have a coupon?</h3>
        <p className="ah-coupon-subtitle">
          Add your code for an instant cart discount
        </p>

        <div className="ah-coupon-form">
          <input
            type="text"
            className="ah-coupon-input"
            placeholder="Coupon Code"
          />
          <button className="ah-apply-button">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
