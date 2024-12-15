import React from "react";
import img from "../assets/images/category-img/img.png";
const Category = () => {
  return (
    <div>
      <section className="category-section">
        <div className="container category-container">
          <h2 className="common_main_head">Shop by Categories</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card">
                <a href="#">
                  <img src={img} alt="" />
                </a>
                <h4 className="categroy-text">Golf Clubs</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
