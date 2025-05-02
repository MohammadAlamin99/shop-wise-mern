import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  addwishListRequest,
  cartCreateRequest,
  productDetailsRequest,
} from "../apiRequest/apiRequiest";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "../redux/state-slice/cartList-slice";
import Review from "./Review";
const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [details, setDetails] = useState([]);
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = await productDetailsRequest(id);
      setDetails(result);
    })();
  }, []);

  const handleQuantityChange = async (productId, newQty) => {
    newQty = Number(newQty);
    if (newQty >= 1) {
      setQuantity(newQty);

      await cartCreateRequest(productId, newQty);
      const updatecart = cartList.map((item) => {
        item?.productID === productId ? { ...item, qty: newQty } : item;
      });
      dispatch(setCartList({ data: { data: updatecart } }));
    }
  };

  const wishlistHandler = async () => {
    await addwishListRequest(id);
    toast.success("Wishlist added!");
  };

  const createCartHandler = async (id) => {
    let result = await cartCreateRequest(
      id,
      quantity,
      selectedColor,
      selectedSize
    );
    if (result[0]?.data?.status === "Success") {
      toast.success("Cart Added!");
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  };

  // const productDetilsRatings = (rating) => {
  //   return Array(5)
  //     .fill(0)
  //     .map((item, i) => {
  //       const isFiled = i < rating;
  //       return (
  //         <svg
  //           key={i}
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="14"
  //           height="14"
  //           viewBox="0 0 16 16"
  //           fill={isFiled ? "#141718" : "none"}
  //           stroke={isFiled ? "#141718" : "#6C7275"}
  //         >
  //           <path d="M7.3879 2.08514C7.6195 1.54844 8.38051 1.54844 8.61211 2.08514L10.0655 5.45307C10.1635 5.68032 10.3794 5.83454 10.6262 5.85361L14.3533 6.14161C14.9513 6.18781 15.1889 6.93852 14.7264 7.32038L11.9235 9.63456C11.7258 9.79779 11.6392 10.0599 11.7008 10.3088L12.5634 13.7944C12.7053 14.3676 12.0869 14.8286 11.578 14.529L8.33822 12.6217C8.12949 12.4988 7.87053 12.4988 7.66179 12.6217L4.42197 14.529C3.9131 14.8286 3.29475 14.3676 3.43661 13.7944L4.29924 10.3088C4.36083 10.0599 4.27425 9.79779 4.07654 9.63456L1.27362 7.32038C0.811112 6.93852 1.04872 6.18781 1.64671 6.14161L5.37381 5.85361C5.62058 5.83454 5.83648 5.68032 5.93455 5.45307L7.3879 2.08514Z" />
  //         </svg>
  //       );
  //     });
  // };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="product-details-section">
        <div className="container mt-4 mb-3">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
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
                <a href="/shop">Shop</a>
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
                <a href="#">{details[0]?.[0]?.category?.brandName}</a>
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
                        <span className="badge-new">
                          {details[0]?.[0]?.remark}
                        </span>
                        <span className="badge-discount">
                          {details[0]?.[0]?.discountPercentage}
                        </span>

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
                                .filter((key) => key.startsWith("img"))
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
                          <span className="reviews-count">{item?.[0].reviewsCount || 0} Reviews</span>
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
                        {item[0]?.details?.size &&
                          item[0]?.details?.size?.length > 0 && (
                            <div className="measurements">
                              <h3 className="section-title">Size</h3>
                              <select
                                onChange={(e) =>
                                  setSelectedSize(e.target.value)
                                }
                                value={selectedSize}
                                className="measurement-value"
                              >
                                <option value="" disabled>
                                  Choose Size
                                </option>
                                {item[0]?.details?.size
                                  ?.split(",")
                                  .map((size, id) => (
                                    <option key={id} value={size.trim()}>
                                      {size.trim()}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          )}

                        {item[0]?.details?.color &&
                          item[0]?.details?.color?.length > 0 && (
                            <div className="color-selection">
                              <h3 className="choose-color">Choose Color</h3>
                              <select
                                onChange={(e) =>
                                  setSelectedColor(e.target.value)
                                }
                                value={selectedColor}
                                className="measurement-value"
                              >
                                <option value="" disabled>
                                  Choose Color
                                </option>
                                {item[0]?.details?.color
                                  ?.split(",")
                                  .map((color, id) => (
                                    <option key={id} value={color.trim()}>
                                      {color.trim()}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          )}
                        <div className="purchase-options">
                          <div className="quantity-selector">
                            <button
                              className="quantity-btn minus"
                              onClick={() =>
                                handleQuantityChange(item[0]._id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                            >
                              −
                            </button>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item[0]._id,
                                  e.target.value
                                )
                              }
                            />
                            <button
                              className="quantity-btn plus"
                              onClick={() =>
                                handleQuantityChange(item[0]?._id, quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={wishlistHandler}
                            className="wish-btn"
                          >
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
                        <button
                          onClick={() => createCartHandler(item[0]._id)}
                          className="addtocartBtn-main"
                        >
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
                                {details[0]?.[0]?.category?.brandName}
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
          : ""}
      </div>
      <Review productId={id} />
    </div>
  );
};

export default ProductDetails;
