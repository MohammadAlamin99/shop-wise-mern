import React from "react";
import img1 from "../assets/images/Instagram/ins-01.jpg"; 
import img2 from "../assets/images/Instagram/insta-02.jpg";
import img3 from "../assets/images/Instagram/insta-03.jpg";
import img4 from "../assets/images/Instagram/insta-04.jpg";
import img5 from "../assets/images/Instagram/insta-05.jpg";
import img6 from "../assets/images/Instagram/insta-06.jpg";
const Instagram = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="instagram_gallery_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="instaHead-area">
              <h4 className="newsfeed">newsfeed</h4>
              <h2 className="common_main_head">Instagram</h2>
              <p className="categroy-text">
                Follow us on social media for more discounts & promotions
              </p>
              <h3 className="categroy-text logo-official">@3legant_official</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="gallery-card-img">
            {images.map((image, index) => (
              <a
                key={index}
                href={image}
                data-lightbox="gallery"
              >
                <img src={image}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;


