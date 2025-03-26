import React, { useRef } from "react";
import OrderSummery from "./OrderSummery";

const CheckOut = () => {
  
const fullNameRef = useRef();
const phoneRef = useRef();
const emailRef = useRef();
const fullAddressRef = useRef();

const onCheckoutHandler = async()=>{
  const fullName = fullNameRef.current.value;
  const phone = phoneRef.current.value;
  const email = emailRef.current.value; 
  const fullAddress = fullAddressRef.current.value; 
}

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
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
              <form>
                <div className="checkout-page__section">
                  <h2 className="checkout-page__section-title">
                    Contact Information
                  </h2>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="checkout-page__label">Full NAME</label>
                      <input
                        type="text"
                        className="checkout-page__input"
                        placeholder="First name"
                        name="firstName"
                        ref={fullNameRef}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="checkout-page__label">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        className="checkout-page__input"
                        placeholder="Phone number"
                        name="phoneNumber"
                        ref={phoneRef}
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
                        name="email"
                        ref={emailRef}
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
                        Full Address*
                      </label>
                      <input
                        type="text"
                        className="checkout-page__input"
                        placeholder="Street Address"
                        name="address"
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-page__place-order place-order-desktop">
                  <button type="button" onClick={onCheckoutHandler} className="checkout-page__order-button">
                    Place Order
                  </button>
                </div>
              </form>
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
