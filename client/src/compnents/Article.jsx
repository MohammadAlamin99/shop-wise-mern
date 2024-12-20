import React from "react";
import img from "../assets/images/article-img.jpg";
const Article = () => {
  return (
    <div>
      <section className="article_section">
        <div className="container">
          <div className="row artical-top-row">
            <div className="col-6">
              <h2 className="common_main_head">Latest Articles</h2>
            </div>
            <div className="col-6 btn-area-article">
              <a href="#">
                <div class="btns">
                  <p class="btn-text">Collections</p>
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
                    ></path>
                    <path
                      d="M10.8335 15L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.8335 5L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="article-card">
              <img src={img} alt="" />
              <h4 className="categroy-text">Air Jordan x Travis Scott Event</h4>
              <a href="#">
                <div class="btns">
                  <p class="btn-text">Collections</p>
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
                    ></path>
                    <path
                      d="M10.8335 15L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.8335 5L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="article-card">
              <img src={img} alt="" />
              <h4 className="categroy-text">Air Jordan x Travis Scott Event</h4>
              <a href="#">
                <div class="btns">
                  <p class="btn-text">Collections</p>
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
                    ></path>
                    <path
                      d="M10.8335 15L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.8335 5L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="article-card">
              <img src={img} alt="" />
              <h4 className="categroy-text">Air Jordan x Travis Scott Event</h4>
              <a href="#">
                <div class="btns">
                  <p class="btn-text">Collections</p>
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
                    ></path>
                    <path
                      d="M10.8335 15L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.8335 5L15.8335 10"
                      stroke="#121212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
