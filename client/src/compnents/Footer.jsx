import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
        <div className="footer-content">
          <div className="brand">
            <h2>3legant</h2>
            <p className="tagline">
              More than just a game.<br />It's a lifestyle.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">👤</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>
  
          <div className="footer-links">
            <h3>Page</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
  
          <div className="footer-links">
            <h3>Info</h3>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return & Refund</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
  
          <div className="footer-links">
            <h3>Office</h3>
            <ul>
              <li>43111 Hai Trieu street,</li>
              <li>District 1, HCMC</li>
              <li>Vietnam</li>
              <li>84-756-3237</li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>Copyright © 2023 3legant. All rights reserved</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="payment-methods">
            <img src="/visa.svg" alt="Visa" />
            <img src="/amex.svg" alt="American Express" />
            <img src="/mastercard.svg" alt="Mastercard" />
            <img src="/stripe.svg" alt="Stripe" />
            <img src="/paypal.svg" alt="PayPal" />
            <img src="/applepay.svg" alt="Apple Pay" />
          </div>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  