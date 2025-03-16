import React from "react";

const Order = () => {
  return (
    <div>
      <div className="order-complete">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h1 className="order-complete__title">Complete!</h1>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <div className="order-complete__progress">
                <div className="order-complete__progress-step completed">
                  <div className="order-complete__progress-icon">
                    {/* <CheckCircle className="order-complete__check-icon" /> */}
                  </div>
                  <span className="order-complete__progress-text">
                    Shopping cart
                  </span>
                  <div className="order-complete__progress-line"></div>
                </div>
                <div className="order-complete__progress-step completed">
                  <div className="order-complete__progress-icon">
                    {/* <CheckCircle className="order-complete__check-icon" /> */}
                  </div>
                  <span className="order-complete__progress-text">
                    Checkout details
                  </span>
                  <div className="order-complete__progress-line"></div>
                </div>
                <div className="order-complete__progress-step active">
                  <div className="order-complete__progress-icon">3</div>
                  <span className="order-complete__progress-text">
                    Order complete
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Confirmation Card */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="order-complete__card">
                <div className="order-complete__card-content">
                  <div className="text-center mb-4">
                    <p className="order-complete__thank-you">Thank you! 🎉</p>
                    <h2 className="order-complete__message">
                      Your order has been received
                    </h2>
                  </div>

                  {/* Product Images */}
                  <div className="order-complete__products">
                    <div className="order-complete__product">
                      <div className="order-complete__product-image">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Black Tray Table"
                        />
                        <span className="order-complete__product-quantity">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="order-complete__product">
                      <div className="order-complete__product-image">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Red Tray Table"
                        />
                        <span className="order-complete__product-quantity">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="order-complete__product">
                      <div className="order-complete__product-image">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Gold Table Lamp"
                        />
                        <span className="order-complete__product-quantity">
                          1
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="order-complete__details">
                    <div className="order-complete__detail-row">
                      <div className="order-complete__detail-label">
                        Order code:
                      </div>
                      <div className="order-complete__detail-value">
                        #0123_45678
                      </div>
                    </div>
                    <div className="order-complete__detail-row">
                      <div className="order-complete__detail-label">Date:</div>
                      <div className="order-complete__detail-value">
                        October 19, 2023
                      </div>
                    </div>
                    <div className="order-complete__detail-row">
                      <div className="order-complete__detail-label">Total:</div>
                      <div className="order-complete__detail-value">
                        $1,345.00
                      </div>
                    </div>
                    <div className="order-complete__detail-row">
                      <div className="order-complete__detail-label">
                        Payment method:
                      </div>
                      <div className="order-complete__detail-value">
                        Credit Card
                      </div>
                    </div>
                  </div>

                  {/* Purchase History Button */}
                  <div className="text-center mt-4">
                    <button className="order-complete__history-button">
                      Purchase history
                    </button>
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

export default Order;
