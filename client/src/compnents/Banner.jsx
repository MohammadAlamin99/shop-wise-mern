import React from "react";
import img from "../assets/images/banner-img/png.png";
const Banner = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 displayFlex">
              <h2 className="banner-text">
                More than just a game. It’s a lifestyle.
              </h2>
              <p className="banner-sub-text">
                Whether you’re just starting out, have played your whole life or
                you're a Tour pro, your swing is like a fingerprint.
              </p>
              <a href="/shop" className="button">
                Shopping Now
              </a>
            </div>
            <div className="col-lg-6">
              <div className="banner-img-right">
                <a href="#">
                  <img src={img} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
