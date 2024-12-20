import React from "react";
import img from "../assets/images/insta1.jpg";
const Instagram = () => {
  return (
    <>
      <section className="instagram_gallery_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="instaHead-area">
                <h4 className="newsfeed">newsfeed</h4>
                <h2 className="common_main_head">Instagram</h2>
                <p className="categroy-text">
                  Follow us on social media for more discount & promotions
                </p>
                <h3 className="categroy-text logo-official">@3legant_official</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="gallery-card-img">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instagram;
