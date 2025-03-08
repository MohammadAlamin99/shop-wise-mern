import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { productDetailsRequest } from "../apiRequest/apiRequiest";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [details, setDetails] = useState([]);
  const productImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=600",
      alt: "Black Tray Table Main View",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=600",
      alt: "Black Tray Table Top View",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=600",
      alt: "Black Tray Table in Living Room",
    },
  ];

  useEffect(() => {
    (async () => {
      const result = await productDetailsRequest(id);
      setDetails(result);
    })();
  }, []);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div>
      <div className="product-details-section">
        <div className="container mt-4 mb-3">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
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
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
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
              </li>
              <li className="breadcrumb-item">
                <a href="#">Living Room</a>
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
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product
              </li>
            </ul>
          </nav>
        </div>
        {details.length > 0
          ? details.map((item, id) => {
              return (
                <div className="container" key={id}>
                  <div className="row">
                    <div className="col-md-6 position-relative">
                      <div className="product-image-container">
                        <span className="badge-new">NEW</span>
                        <span className="badge-discount">-50%</span>

                        <div className="main-slider-container">
                          <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{
                              swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed
                                  ? thumbsSwiper
                                  : null,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="main-swiper"
                          >
                            {details.map((item, id) =>
                              Object.keys(item[0].details)
                                .filter((key) => key.startsWith("img"))
                                .map((key, index) => (
                                  <SwiperSlide key={`${id}-${index}`}>
                                    <img
                                      src={item[0].details[key]}
                                      className="img-fluid main-product-image"
                                      alt={`Product image ${index + 1}`}
                                    />
                                  </SwiperSlide>
                                ))
                            )}
                          </Swiper>
                        </div>

                        <div className="thumbnail-container">
                          <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={24}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="thumbs-swiper"
                          >
                            {details.map((item, id) =>
                              Object.keys(item[0].details)
                                .filter((key) => key.startsWith("img")) // Filter image keys dynamically
                                .map((key, index) => (
                                  <SwiperSlide key={`${id}-thumb-${index}`}>
                                    <img
                                      src={item[0].details[key]}
                                      className="img-fluid thumbnail-image"
                                      alt={`Thumbnail ${index + 1}`}
                                    />
                                  </SwiperSlide>
                                ))
                            )}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-info">
                        <div className="ratings">
                          <span className="stars">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                fill="#343839"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                fill="#343839"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                fill="#343839"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                fill="#343839"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                fill="#343839"
                              />
                            </svg>
                          </span>
                          <span className="reviews-count">11 Reviews</span>
                        </div>
                        <h1 className="product-title common_main_head">
                          {item[0]["title"]}
                        </h1>
                        <p className="product-description">
                          {item[0].details["des"]}
                        </p>
                        <div className="product-price">
                          <span className="current-price">
                            TK. {item[0]["price"]}
                          </span>
                          <span
                            className="original-price"
                            style={{
                              display:
                                item[0]["discountPrice"] == 0
                                  ? "none"
                                  : "block",
                            }}
                          >
                            TK. {item[0]["discountPrice"]}
                          </span>
                        </div>
                        <div className="measurements">
                          <h3 className="section-title">Size</h3>
                          <select className="measurement-value">
                            <option value="S">S</option>
                            <option value="M" selected>
                              M
                            </option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        </div>

                        <div className="color-selection">
                          <div className="choose-color">
                            <h3 className="section-title">Choose Color</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10 7L14 12L10 17"
                                stroke="#6C7275"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="selected-color">Black</p>
                          <div className="color-options">
                            <button
                              className={`color-option ${
                                selectedColor === "black" ? "selected" : ""
                              }`}
                              onClick={() => setSelectedColor("black")}
                            >
                              <img
                                src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png"
                                alt="Black Tray Table"
                              />
                            </button>
                            <button
                              className={`color-option ${
                                selectedColor === "bronze" ? "selected" : ""
                              }`}
                              onClick={() => setSelectedColor("bronze")}
                            >
                              <img
                                src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png"
                                alt="Bronze Tray Table"
                              />
                            </button>
                            <button
                              className={`color-option ${
                                selectedColor === "red" ? "selected" : ""
                              }`}
                              onClick={() => setSelectedColor("red")}
                            >
                              <img
                                src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png"
                                alt="Red Tray Table"
                              />
                            </button>
                            <button
                              className={`color-option ${
                                selectedColor === "white" ? "selected" : ""
                              }`}
                              onClick={() => setSelectedColor("white")}
                            >
                              <img
                                src="https://res.cloudinary.com/dankquy0f/image/upload/v1736501786/freepik_br_0ba5de46-84f0-4f3b-a2e3-10d09391761d_bi9bse.png"
                                alt="White Tray Table"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="purchase-options mt-4">
                          <div className="quantity-selector">
                            <button
                              className="quantity-btn minus"
                              onClick={() => handleQuantityChange(-1)}
                              disabled={quantity <= 1}
                            >
                              −
                            </button>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <button
                              className="quantity-btn plus"
                              onClick={() => handleQuantityChange(1)}
                            >
                              +
                            </button>
                          </div>
                          <button className="wish-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.1924 6.91706C12.8055 7.28838 12.1945 7.28838 11.8076 6.91706L11.1152 6.2526C10.3048 5.47487 9.20994 5 8 5C5.51472 5 3.5 7.01472 3.5 9.5C3.5 11.8826 4.78979 13.8501 6.65176 15.4666C8.51532 17.0844 10.7434 18.1574 12.0746 18.7051C12.353 18.8196 12.647 18.8196 12.9254 18.7051C14.2566 18.1574 16.4847 17.0844 18.3482 15.4666C20.2102 13.85 21.5 11.8826 21.5 9.5C21.5 7.01472 19.4853 5 17 5C15.7901 5 14.6952 5.47487 13.8848 6.2526L13.1924 6.91706ZM12.5 4.80957C11.3321 3.6888 9.74649 3 8 3C4.41015 3 1.5 5.91015 1.5 9.5C1.5 15.8683 8.47034 19.385 11.3138 20.5547C12.0796 20.8697 12.9204 20.8697 13.6862 20.5547C16.5297 19.385 23.5 15.8682 23.5 9.5C23.5 5.91015 20.5899 3 17 3C15.2535 3 13.6679 3.6888 12.5 4.80957Z"
                                fill="#141718"
                              />
                            </svg>
                            Wishlist
                          </button>
                        </div>
                        <button className="addtocartBtn-main">
                          Add to Cart
                        </button>
                        <div className="product-details mt-4">
                          <div className="row">
                            <div className="col-4">
                              <p className="detail-label">SKU</p>
                            </div>
                            <div className="col-8">
                              <p className="detail-value">1117</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4">
                              <p className="detail-label">CATEGORY</p>
                            </div>
                            <div className="col-8">
                              <p className="detail-value">
                                Living Room, Bedroom
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No Data Fund"}
      </div>
    </div>
  );
};

export default ProductDetails;
