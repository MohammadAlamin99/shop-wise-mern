import React from "react";

const BlogBanner = () => {
  return (
    <div>
      <section className="shop_banner">
        <div className="container bg-banner">
          <div className="row">
            <div className="col-lg-12">
              <div className="text_wrapper">
                <div className="btn">
                  <a href="/" className="btn-home">
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M4.58423 3L7.58423 6L4.58423 9"
                        stroke="#605F5F"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <h4 className="shop-btn">Blog</h4>
                </div>
                <h2 className="shop-text">Our Blog</h2>
                <p className="categroy-text">
                Home ideas and design inspiration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
