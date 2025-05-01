import React from "react";
import logo from "../assets/images/logo-phone-menu.png";

const MobileMenu = ({ isActive, isSetActive }) => {
  return (
    <div>
      <div className="manuOverlay">
        <div className={`overlay ${isActive ? "active" : ""}`}></div>
        <div className={`mobile_menu_area ${isActive ? "active" : ""}`}>
          <div className="top">
            <div className="log_top_area">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <svg
                onClick={() => isSetActive(false)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#6C7275"
                />
              </svg>
            </div>
            <div className="mobile-input-area">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="#141718"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input type="text" placeholder="Search" />
            </div>
            <div className="mobile_nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom">
            <a href="/account">
              <div className="mobile-cart-list">
                <h4 className="common-text">Account</h4>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                      stroke="#141718"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/signin" className="button">
              Sign In
            </a>

            <div className="mobile-social-media">
              <a href="#">
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
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <circle cx="18" cy="6" r="1" fill="#141718" />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#">
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
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
