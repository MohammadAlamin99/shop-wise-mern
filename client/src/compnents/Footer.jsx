import React from "react";
import logo from "../assets/images/fotter_logo.png";
import payment from "../assets/images/payment_method.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="brand">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p className="categroy-text">
              More than just a game It's a lifestyle.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                  <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="18"
                    rx="4"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Page</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Info</h3>
            <ul>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Return & Refund</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Office</h3>
            <ul className="address">
              <li>43111 Hai Trieu street,</li>
              <li>District 1, HCMC</li>
              <li>Vietnam</li>
              <li><a href="tel:84-756-3237" class="phone-link">84-756-3237</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="coppy_text">Copyright © 2023 3legant. All rights reserved</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="payment-methods">
              <img src={payment} alt="" />
              <img src={payment} alt="" />
              <img src={payment} alt="" />
              <img src={payment} alt="" />
              <img src={payment} alt="" />
              <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
