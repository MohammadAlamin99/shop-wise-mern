import React from "react";
import img1 from "../assets/images/Discount-section/shop-collection.png";
const ShopCollection = () => {
  return (
    <div>
      <section className="shop-collection-section">
        <div className="container">
          <h2 className="common_main_head">Shop Collection</h2>
          <div className="row shop-main-row">
            <div className="col-lg-6 left-col">
              <div className="img-card-area">
                <a href="#">
                  <img src={img1} alt="" />
                </a>
                <h4 className="card-text">Juniors Set</h4>
                <a href="#">
                  <div className="btns">
                    <p className="btn-text">Collections</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.1665 10H15.8332"
                        stroke="#121212"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8335 15L15.8335 10"
                        stroke="#121212"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8335 5L15.8335 10"
                        stroke="#121212"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-6 down-col-shop">
              <div className="img-card-area">
                <div className="text">
                  <h4 className="card-text">Juniors Set</h4>
                  <a href="#">
                    <div className="btns">
                      <p className="btn-text">Collections</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.1665 10H15.8332"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.8335 15L15.8335 10"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.8335 5L15.8335 10"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="img">
                  <a href="#">
                    <img src="https://www.holdmybag.co/assets/images/banner-img.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="img-card-area">
                <div className="text">
                  <h4 className="card-text">Juniors Set</h4>
                  <a href="#">
                    <div className="btns">
                      <p className="btn-text">Collections</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.1665 10H15.8332"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.8335 15L15.8335 10"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.8335 5L15.8335 10"
                          stroke="#121212"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="img">
                  <a href="#">
                    <img src={img1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCollection;
