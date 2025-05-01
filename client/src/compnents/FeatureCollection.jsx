import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  allProductRequiest,
  cartCreateRequest,
  getAllCartRequest,
} from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/state-slice/product-slice";
import CartDrawer from "./CartDrawer";
import { setCartList } from "../redux/state-slice/cartList-slice";

const FeatureCollection = () => {
  const productData = useSelector((state) => state.getProduct.product);
  const dispatch = useDispatch();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get cart list data
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];

  // Check if product is in cart
  const isProductInCart = (productId) => {
    return cartList.some((item) => item?.product?._id === productId);
  };

  const onCloseHandler = () => {
    setIsCartDrawerOpen(false);
  };

  useEffect(() => {
    (async () => {
      let result = await allProductRequiest();
      dispatch(setProduct(result));
    })();
  }, []);

  const createCartHandler = async (id) => {
    setLoading(true);
    try {
      let qty = 1;
      let color = "";
      let size = "";
      let result = await cartCreateRequest(id, qty, color, size);
      if (result) {
        const cartList = await getAllCartRequest();
        dispatch(setCartList(cartList));
        setIsCartDrawerOpen(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="feature-collection-section">
        <div className="container">
          <div className="header-feature">
            <h2 className="common_main_head">Featured</h2>
            <div id="main_bullets"></div>
          </div>
          <div className="row">
            <div className="feature-header">
              <Swiper
                spaceBetween={24}
                slidesPerView={4.5}
                loop={false}
                modules={[Pagination]}
                pagination={{
                  el: "#main_bullets",
                  type: "bullets",
                  bulletClass: "custom-bullet",
                  bulletActiveClass: "custom-bullet-active",
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 24,
                  },
                }}
              >
                {productData.length > 0 ? (
                  productData.slice(0, 8).map((item, i) => {
                    const isInCart = isProductInCart(item._id);
                    return (
                      <SwiperSlide key={i}>
                        <div className="collection_card">
                          <div className="card">
                            <span className="hot-label">{item?.remark}</span>
                            <span className="dis-label">
                              {item["discountPercentage"] || ""}
                            </span>
                            <a href={"/product-details/" + item._id}>
                              <img
                                className="product-image"
                                src={item.image}
                                alt={item.title}
                              />
                            </a>
                            <button
                              onClick={() => createCartHandler(item._id)}
                              className={`add-cart ${isInCart ? "disabled" : ""}`}
                              disabled={isInCart || loading}
                            >
                              {isInCart ? "View Details" : "Add to cart"}
                            </button>
                          </div>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="star">
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
                            ))}
                          </div>
                          <h3 className="product-title">{item.title}</h3>
                          <div className="price-box">
                            <p className="price">TK. {item.price}</p>
                            {item.discountPrice > 0 && (
                              <p className="dis-price">TK. {item.discountPrice}</p>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <span className="text-center">No Data Found</span>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <CartDrawer isOpen={isCartDrawerOpen} onClose={onCloseHandler} />
    </div>
  );
};

export default FeatureCollection;