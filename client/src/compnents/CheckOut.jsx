import React, { useState } from "react";
import OrderSummery from "./OrderSummery";
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
          <div className="row">
            <div className="col-12">
              <h2 className="checkout-page__title">Check Out</h2>
            </div>
          </div>
          <div className="row cheakoutrow">
            <div className="col-md-9">
              <div className="checkout-page__progress">
                <div className="checkout-page__progress-step completed">
                  <div className="checkout-page__progress-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12L10 16L18 8"
                        stroke="#FCFCFD"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="checkout-page__progress-text">
                    Shopping cart
                  </span>
                </div>
                <div className="checkout-page__progress-step active">
                  <div className="checkout-page__progress-icon">2</div>
                  <span className="checkout-page__progress-text">
                    Checkout details
                  </span>
                </div>
                <div className="checkout-page__progress-step next">
                  <div className="checkout-page__progress-icon">3</div>
                  <span className="checkout-page__progress-text">
                    Order complete
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <div className="checkout-page__section">
                <h2 className="checkout-page__section-title">
                  Contact Information
                </h2>
                <div className="row">
                  <div className="col-md-12">
                    <label className="checkout-page__label">FIRST NAME</label>
                    <input
                      type="text"
                      className="checkout-page__input"
                      placeholder="First name"
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
              <div className="checkout-page__place-order place-order-desktop">
                <button className="checkout-page__order-button">
                  Place Order
                </button>
              </div>
            </div>

            <div className="col-md-5">
              <OrderSummery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
