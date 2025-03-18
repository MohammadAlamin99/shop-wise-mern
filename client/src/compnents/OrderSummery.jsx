import React from "react";

const OrderSummery = () => {
  return (
    <div>
      <div className="order-summary">
        <h1 className="summary-title">Order summary</h1>

        <div className="product-list">
          <div className="product-item">
            <div className="product-image">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Tray Table"
                className="product-img"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">Tray Table</h3>
              <p className="product-color">Color: Black</p>
              <div className="quantity-control">
                <button className="quantity-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M3.22925 8.5H12.5626"
                      stroke="#121212"
                      stroke-width="0.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span className="quantity-value">2</span>
                <button className="quantity-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.375 3.83398C8.375 3.62688 8.20711 3.45898 8 3.45898C7.79289 3.45898 7.625 3.62688 7.625 3.83398V8.12567H3.33325C3.12615 8.12567 2.95825 8.29356 2.95825 8.50067C2.95825 8.70778 3.12615 8.87567 3.33325 8.87567H7.625V13.1673C7.625 13.3744 7.79289 13.5423 8 13.5423C8.20711 13.5423 8.375 13.3744 8.375 13.1673V8.87567H12.6666C12.8737 8.87567 13.0416 8.70778 13.0416 8.50067C13.0416 8.29356 12.8737 8.12567 12.6666 8.12567H8.375V3.83398Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-price">$38.00</div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Tray Table"
                className="product-img"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">Tray Table</h3>
              <p className="product-color">Color: Red</p>
              <div className="quantity-control">
                <button className="quantity-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <span className="quantity-value">2</span>
                <button className="quantity-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.22925 8H12.5626"
                      stroke="#121212"
                      stroke-width="0.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-price">$38.00</div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Table lamp"
                className="product-img"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">Table lamp</h3>
              <p className="product-color">Color: gold</p>
              <div className="quantity-control">
                <button className="quantity-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <span className="quantity-value">2</span>
                <button className="quantity-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-price">$39.00</div>
          </div>
        </div>

        <div className="summary-details">
          <div className="summary-row">
            <span className="summary-text">Shipping</span>
            <span className="summary-price">Free</span>
          </div>
          <div className="summary-row">
            <span className="summary-text">Subtotal</span>
            <span className="summary-price">$99.00</span>
          </div>
          <div className="summary-row total-row">
            <span className="summary-price">Total</span>
            <span className="summary-price">$234.00</span>
          </div>
        </div>
      </div>
      <div className="checkout-page__place-order phone-place-orderbutton">
        <button className="checkout-page__order-button">Place Order</button>
      </div>
    </div>
  );
};

export default OrderSummery;
