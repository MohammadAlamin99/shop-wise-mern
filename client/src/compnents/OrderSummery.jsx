import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartCreateRequest } from "../apiRequest/apiRequiest";
import { setCartList } from "../redux/state-slice/cartList-slice";

const OrderSummery = () => {
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

  return (
    <div>
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
                    <h3 className="product-name">{item?.product?.title}</h3>
                    <p className="product-color">Color: Black</p>
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateProduct(item?.productID, Number(item?.qty) - 1)
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
                      <span className="quantity-value">{item?.qty}</span>
                      <button
                        onClick={() =>
                          updateProduct(item?.productID, Number(item?.qty) + 1)
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
                  <label htmlFor="free-shipping" className="shipping-label">
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
                <label htmlFor="inside-dhaka" className="shipping-label">
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
                <label htmlFor="outside-dhaka" className="shipping-label">
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
        <button className="checkout-page__order-button">Place Order</button>
      </div>
    </div>
  );
};

export default OrderSummery;
