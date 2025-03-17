import React from "react";

const Order = () => {
  return (
    <div>
      <div className="order-complete">
        <div className="container">
          <div className="row">
          <div className="phone-back-btn-home">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M7.41602 9L4.41602 6L7.41602 3" stroke="#605F5F" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <a href="/">back to home</a>
          </div>
            <div className="col-12">
              <h1 className="common_main_head">Complete!</h1>
            </div>
          </div>

          <div className="row custom-row">
            <div className="col-md-8">
              <div className="order-complete__progress">
                <div className="order-complete__progress-step completed">
                  <div className="order-complete__progress-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10 16L18 8" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                  <span className="order-complete__progress-text">
                    Shopping cart
                  </span>
                  <div className="order-complete__progress-line"></div>
                </div>
                <div className="order-complete__progress-step completed">
                  <div className="order-complete__progress-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10 16L18 8" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
          <div className="row custom-content-row">
            <div className="col-md-8 col-lg-7">
              <div className="order-complete__card">
                <div className="order-complete__card-content">
                  <div className="text-center mb-4">
                    <p className="order-complete__thank-you">Thank you! 🎉</p>
                    <h2 className="order-complete__message">
                      Your order has been received
                    </h2>
                  </div>
                  <div className="order-complete__products">
                    <div className="order-complete__product">
                      <div className="order-complete__product-image">
                        <img
                          src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501827/freepik_br_dbc9d355-00d6-4683-8e37-8f82ad953419_p6j7y8.png"
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
                          src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501827/freepik_br_dbc9d355-00d6-4683-8e37-8f82ad953419_p6j7y8.png"
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
                          src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501827/freepik_br_dbc9d355-00d6-4683-8e37-8f82ad953419_p6j7y8.png"
                          alt="Gold Table Lamp"
                        />
                        <span className="order-complete__product-quantity">
                          1
                        </span>
                      </div>
                    </div>
                  </div>

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

                  <div className="al-btn-wrapper">
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
