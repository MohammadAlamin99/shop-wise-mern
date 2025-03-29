import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCreateRequest,
  invoiceCreateRequest,
} from "../apiRequest/apiRequiest";
import { setCartList } from "../redux/state-slice/cartList-slice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CheckOut = () => {
  const navigate = useNavigate()
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState("outsideDhaka");
  const subtotal = cartList.reduce(
    (total, item) => total + item?.product.price * item?.qty,
    0
  );
  const updateProduct = async (productid, newQuantity) => {
    newQuantity = Number(newQuantity);
    if (newQuantity >= 1) {
      await cartCreateRequest(productid, newQuantity);
      const updateCart = cartList.map((item) => {
        return item.productID === productid
          ? { ...item, qty: newQuantity }
          : item;
      });
      dispatch(setCartList({ data: { data: updateCart } }));
    }
  };

  const handleShippingChange = (method) => {
    setShippingMethod(method);
  };

  // Calculate shipping cost based on selected method
  const shippingCost = {
    free: 0,
    insideDhaka: 50,
    outsideDhaka: 150,
  }[shippingMethod];

  const total = subtotal + shippingCost;

  const fullNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const fullAddressRef = useRef();

  const onCheckoutHandler = async () => {
    const orderid = Math.floor(100000 + Math.random() * 900000);
    const fullname = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const fullAddress = fullAddressRef.current.value;
    if (!fullname || !phone || !email || !fullAddress) {
      toast.error("All fields are required!");
      return;
    }
    const country = "Bangladesh";
    const paymentMethod = "Cash on Delivary";
    const product = cartList.map((item) => item);

    const result = await invoiceCreateRequest(
      orderid,
      fullname,
      phone,
      email,
      fullAddress,
      country,
      paymentMethod,
      product,
      subtotal,
      shippingCost,
      total
    );
    if (result.status===200) {
      toast.success("Order placed successfully!");
      navigate("/ordercomplete");
    } else {
      toast.error("Failed to place order!");
    }
  };

  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <div className="checkout-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="checkout-page__title">Check Out</h2>
            </div>
          </div>
          <div className="row cheakoutrow">
            <div className="col-md-9">
              <div className="checkout-page__progress">
                <div className="checkout-page__progress-step completed">
                  <div className="checkout-page__progress-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12L10 16L18 8"
                        stroke="#FCFCFD"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="checkout-page__progress-text">
                    Shopping cart
                  </span>
                </div>
                <div className="checkout-page__progress-step active">
                  <div className="checkout-page__progress-icon">2</div>
                  <span className="checkout-page__progress-text">
                    Checkout details
                  </span>
                </div>
                <div className="checkout-page__progress-step next">
                  <div className="checkout-page__progress-icon">3</div>
                  <span className="checkout-page__progress-text">
                    Order complete
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <form>
                <div className="checkout-page__section">
                  <h2 className="checkout-page__section-title">
                    Contact Information
                  </h2>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="checkout-page__label">Full NAME</label>
                      <input
                        type="text"
                        className="checkout-page__input"
                        placeholder="First name"
                        name="firstName"
                        ref={fullNameRef}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="checkout-page__label">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        className="checkout-page__input"
                        placeholder="Phone number"
                        name="phoneNumber"
                        ref={phoneRef}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="checkout-page__label">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        className="checkout-page__input"
                        placeholder="Your Email"
                        name="email"
                        ref={emailRef}
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-page__section">
                  <h2 className="checkout-page__section-title">
                    Shipping Address
                  </h2>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="checkout-page__label">
                        Full Address*
                      </label>
                      <input
                        type="text"
                        className="checkout-page__input"
                        placeholder="Street Address"
                        name="address"
                        ref={fullAddressRef}
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-page__place-order place-order-desktop">
                  <button
                    type="button"
                    onClick={onCheckoutHandler}
                    className="checkout-page__order-button"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="order-summary">
                <h1 className="summary-title">Order summary</h1>
                <div className="product-list">
                  {cartList.length > 0 ? (
                    cartList.map((item, i) => {
                      return (
                        <div key={i} className="product-item">
                          <div className="product-image">
                            <img
                              src={item?.product?.image}
                              alt="Tray Table"
                              className="product-img"
                            />
                          </div>
                          <div className="product-details">
                            <h3 className="product-name">
                              {item?.product?.title}
                            </h3>
                            <p className="product-color">Color: Black</p>
                            <div className="quantity-control">
                              <button
                                onClick={() =>
                                  updateProduct(
                                    item?.productID,
                                    Number(item?.qty) - 1
                                  )
                                }
                                className="quantity-btn"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                >
                                  <path
                                    d="M3.22925 8.5H12.5626"
                                    stroke="#121212"
                                    strokeWidth="0.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                              <span className="quantity-value">
                                {item?.qty}
                              </span>
                              <button
                                onClick={() =>
                                  updateProduct(
                                    item?.productID,
                                    Number(item?.qty) + 1
                                  )
                                }
                                className="quantity-btn"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.375 3.83398C8.375 3.62688 8.20711 3.45898 8 3.45898C7.79289 3.45898 7.625 3.62688 7.625 3.83398V8.12567H3.33325C3.12615 8.12567 2.95825 8.29356 2.95825 8.50067C2.95825 8.70778 3.12615 8.87567 3.33325 8.87567H7.625V13.1673C7.625 13.3744 7.79289 13.5423 8 13.5423C8.20711 13.5423 8.375 13.3744 8.375 13.1673V8.87567H12.6666C12.8737 8.87567 13.0416 8.70778 13.0416 8.50067C13.0416 8.29356 12.8737 8.12567 12.6666 8.12567H8.375V3.83398Z"
                                    fill="#121212"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="product-price">
                            {" "}
                            TK. {item?.product?.price}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="empty-cart-message">No Data Found</p>
                  )}
                </div>

                <div className="summary-details">
                  <div className="summary-row">
                    <span className="summary-text">Shipping</span>
                    <div className="summary-price">
                      {subtotal > 2000 && (
                        <div className="shipping-box">
                          <input
                            type="radio"
                            id="free-shipping"
                            name="shipping-method"
                            className="custom-radio"
                            checked={shippingMethod === "free"}
                            onChange={() => handleShippingChange("free")}
                          />
                          <label
                            htmlFor="free-shipping"
                            className="shipping-label"
                          >
                            Free: TK. 0
                          </label>
                        </div>
                      )}
                      <div className="shipping-box">
                        <input
                          type="radio"
                          id="inside-dhaka"
                          name="shipping-method"
                          className="custom-radio"
                          checked={shippingMethod === "insideDhaka"}
                          onChange={() => handleShippingChange("insideDhaka")}
                        />
                        <label
                          htmlFor="inside-dhaka"
                          className="shipping-label"
                        >
                          Inside Dhaka: TK. 50
                        </label>
                      </div>
                      <div className="shipping-box">
                        <input
                          type="radio"
                          id="outside-dhaka"
                          name="shipping-method"
                          className="custom-radio"
                          checked={shippingMethod === "outsideDhaka"}
                          onChange={() => handleShippingChange("outsideDhaka")}
                        />
                        <label
                          htmlFor="outside-dhaka"
                          className="shipping-label"
                        >
                          Outside Dhaka: TK. 150
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-text">Subtotal</span>
                    <span className="summary-price">TK. {subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-text">Shipping Cost</span>
                    <span className="summary-price">TK. {shippingCost}</span>
                  </div>
                  <div className="summary-row total-row">
                    <span className="summary-text">Total</span>
                    <span className="summary-price">TK. {total}</span>
                  </div>
                </div>
              </div>
              <div className="checkout-page__place-order phone-place-orderbutton">
                <button
                  onClick={onCheckoutHandler}
                  className="checkout-page__order-button"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
