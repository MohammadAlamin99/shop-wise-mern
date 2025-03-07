import React, { useState } from "react";

const CartDetails = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Tray Table",
      color: "Black",
      price: 19,
      quantity: 2,
    },
    { id: "2", name: "Tray Table", color: "Red", price: 19, quantity: 2 },
    {
      id: "3",
      name: "Table lamp",
      color: "Gold",
      price: 39,
      quantity: 1,
    },
  ]);

  // cart remove
  const removeProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // quantity update
  const quntityUpdate = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setProducts(
        products.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // calculate total price
  const subtotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart_details_section">
      <div className="container">
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
              <div className="ah-product-header section-title">Product</div>
              <div className="ah-product-header section-title">Quantity</div>
              <div className="ah-product-header section-title">Price</div>
              <div className="ah-product-header section-title">Subtotal</div>
            </div>

            {products.map((product, id) => (
              <div key={id} className="ah-cart-item">
                <div className="ah-product-info">
                  <div className="ah-product-image">
                    <img src="https://res.cloudinary.com/dankquy0f/image/upload/v1737094545/img_1_lak23c.png" />
                  </div>
                  <div className="ah-product-details">
                    <div className="ah-product-name">{product.name}</div>
                    <div className="ah-product-color">
                      Color : {product.color}
                    </div>
                    <button
                      className="ah-remove-button"
                      onClick={() => removeProduct(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                          fill="#6C7275"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="ah-quantity-controls">
                  <button
                    className="ah-quantity-btn"
                    onClick={() =>
                      quntityUpdate(product.id, product.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span className="ah-quantity-value">{product.quantity}</span>
                  <button
                    className="ah-quantity-btn"
                    onClick={() =>
                      quntityUpdate(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="ah-price">TK. {product.price.toFixed(2)}</div>
                <div className="ah-subtotal">
                  TK. {(product.quantity * product.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="ah-cart-summary">
            <h2 className="ah-summary-title">Cart summary</h2>
            <div className="ah-summary-row">
              <span className="section-title">Subtotal</span>
              <span className="ah-summary-value section-title">
                TK.{subtotal.toFixed(2)}
              </span>
            </div>

            <div className="ah-summary-row ah-total">
              <span className="section-title">Total</span>
              <span className="ah-summary-value section-title">
                TK.{subtotal.toFixed(2)}
              </span>
            </div>
            <button className="ah-continue-button">Continue Shopping</button>
            <button className="ah-checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
