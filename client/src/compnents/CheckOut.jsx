import React, { useState } from "react";
// import { CheckCircle } from "lucide-react"
const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [quantities, setQuantities] = useState({
    blackTray: 2,
    redTray: 2,
    tableLamp: 2,
  });

  const handleQuantityChange = (item, value) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, prev[item] + value),
    }));
  };
  return (
    <div>
      <div className="checkout-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h1 className="checkout-page__title">Check Out</h1>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <div className="checkout-page__progress">
                <div className="checkout-page__progress-step completed">
                  <div className="checkout-page__progress-icon">
                    {/* <CheckCircle className="checkout-page__check-icon" /> */}
                  </div>
                  <span className="checkout-page__progress-text">
                    Shopping cart
                  </span>
                  <div className="checkout-page__progress-line"></div>
                </div>
                <div className="checkout-page__progress-step active">
                  <div className="checkout-page__progress-icon">2</div>
                  <span className="checkout-page__progress-text">
                    Checkout details
                  </span>
                  <div className="checkout-page__progress-line"></div>
                </div>
                <div className="checkout-page__progress-step">
                  <div className="checkout-page__progress-icon">3</div>
                  <span className="checkout-page__progress-text">
                    Order complete
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Left Column - Forms */}
            <div className="col-md-7">
              {/* Contact Information */}
              <div className="checkout-page__section">
                <h2 className="checkout-page__section-title">
                  Contact Information
                </h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="checkout-page__label">FIRST NAME</label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="checkout-page__label">LAST NAME</label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="checkout-page__label">PHONE NUMBER</label>
                    <input
                      type="tel"
                      className="checkout-page__input"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="checkout-page__label">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="checkout-page__input"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="checkout-page__section">
                <h2 className="checkout-page__section-title">
                  Shipping Address
                </h2>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="checkout-page__label">
                      STREET ADDRESS *
                    </label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="Street Address"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="checkout-page__label">COUNTRY *</label>
                    <select className="checkout-page__select">
                      <option>Country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="checkout-page__label">
                      TOWN / CITY *
                    </label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="Town / City"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="checkout-page__label">STATE</label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="State"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="checkout-page__label">ZIP CODE</label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="checkout-page__checkbox-container">
                      <input
                        type="checkbox"
                        id="different-billing"
                        className="checkout-page__checkbox"
                      />
                      <label
                        htmlFor="different-billing"
                        className="checkout-page__checkbox-label"
                      >
                        Use a different billing address (optional)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="checkout-page__section">
                <h2 className="checkout-page__section-title">Payment method</h2>
                <div className="checkout-page__payment-options">
                  <div
                    className={`checkout-page__payment-option ${
                      paymentMethod === "credit" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod("credit")}
                  >
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment"
                      checked={paymentMethod === "credit"}
                      onChange={() => setPaymentMethod("credit")}
                    />
                    <label htmlFor="credit-card">Pay by Card Credit</label>
                    <span className="checkout-page__card-icon">💳</span>
                  </div>

                  <div
                    className={`checkout-page__payment-option ${
                      paymentMethod === "paypal" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                </div>

                {paymentMethod === "credit" && (
                  <div className="checkout-page__card-details">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label className="checkout-page__label">
                          CARD NUMBER
                        </label>
                        <input
                          type="text"
                          className="checkout-page__input"
                          placeholder="1234 1234 1234"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="checkout-page__label">
                          EXPIRATION DATE
                        </label>
                        <input
                          type="text"
                          className="checkout-page__input"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="checkout-page__label">CVC</label>
                        <input
                          type="text"
                          className="checkout-page__input"
                          placeholder="CVC code"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Place Order Button */}
              <div className="checkout-page__place-order">
                <button className="checkout-page__order-button">
                  Place Order
                </button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="col-md-5">
              <div className="checkout-page__order-summary">
                <h2 className="checkout-page__summary-title">Order summary</h2>

                {/* Product Items */}
                <div className="checkout-page__product-item">
                  <div className="checkout-page__product-image">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Black Tray Table"
                    />
                  </div>
                  <div className="checkout-page__product-details">
                    <div className="checkout-page__product-info">
                      <h3 className="checkout-page__product-name">
                        Tray Table
                      </h3>
                      <p className="checkout-page__product-color">
                        Color: Black
                      </p>
                    </div>
                    <div className="checkout-page__product-price">$38.00</div>
                  </div>
                  <div className="checkout-page__quantity-control">
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("blackTray", -1)}
                    >
                      -
                    </button>
                    <span className="checkout-page__quantity">
                      {quantities.blackTray}
                    </span>
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("blackTray", 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="checkout-page__product-item">
                  <div className="checkout-page__product-image">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Red Tray Table"
                    />
                  </div>
                  <div className="checkout-page__product-details">
                    <div className="checkout-page__product-info">
                      <h3 className="checkout-page__product-name">
                        Tray Table
                      </h3>
                      <p className="checkout-page__product-color">Color: Red</p>
                    </div>
                    <div className="checkout-page__product-price">$38.00</div>
                  </div>
                  <div className="checkout-page__quantity-control">
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("redTray", -1)}
                    >
                      -
                    </button>
                    <span className="checkout-page__quantity">
                      {quantities.redTray}
                    </span>
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("redTray", 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="checkout-page__product-item">
                  <div className="checkout-page__product-image">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Gold Table Lamp"
                    />
                  </div>
                  <div className="checkout-page__product-details">
                    <div className="checkout-page__product-info">
                      <h3 className="checkout-page__product-name">
                        Table lamp
                      </h3>
                      <p className="checkout-page__product-color">
                        Color: gold
                      </p>
                    </div>
                    <div className="checkout-page__product-price">$39.00</div>
                  </div>
                  <div className="checkout-page__quantity-control">
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("tableLamp", -1)}
                    >
                      -
                    </button>
                    <span className="checkout-page__quantity">
                      {quantities.tableLamp}
                    </span>
                    <button
                      className="checkout-page__quantity-btn"
                      onClick={() => handleQuantityChange("tableLamp", 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="checkout-page__coupon">
                  <input
                    type="text"
                    className="checkout-page__coupon-input"
                    placeholder="Input"
                  />
                  <button className="checkout-page__coupon-button">
                    Apply
                  </button>
                </div>

                {/* Discount */}
                <div className="checkout-page__discount">
                  <div className="checkout-page__discount-info">
                    <span className="checkout-page__discount-icon">🎫</span>
                    <span className="checkout-page__discount-code">
                      JenkateMW
                    </span>
                  </div>
                  <div className="checkout-page__discount-amount">
                    -$25.00{" "}
                    <span className="checkout-page__remove">[Remove]</span>
                  </div>
                </div>

                {/* Order Totals */}
                <div className="checkout-page__totals">
                  <div className="checkout-page__total-row">
                    <span className="checkout-page__total-label">Shipping</span>
                    <span className="checkout-page__total-value">Free</span>
                  </div>
                  <div className="checkout-page__total-row">
                    <span className="checkout-page__total-label">Subtotal</span>
                    <span className="checkout-page__total-value">$99.00</span>
                  </div>
                  <div className="checkout-page__total-row checkout-page__grand-total">
                    <span className="checkout-page__total-label">Total</span>
                    <span className="checkout-page__total-value">$234.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
