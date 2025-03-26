import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCreateRequest,
  removeCartRequest,
} from "../apiRequest/apiRequiest";
import { setCartList } from "../redux/state-slice/cartList-slice";

const CartDetails = () => {
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];
  const dispatch = useDispatch();
  const [selectedShipping, setSelectedShipping] = useState("outside");

  const subtotal = cartList.reduce(
    (total, item) => total + item.product.price * item.qty,
    0
  );

  

  // Function to remove item
  const removeItem = async (id) => {
    await removeCartRequest(id);
    const updatedCart = cartList.filter((item) => item.productID !== id);
    dispatch(setCartList({ data: { data: updatedCart } }));
  };

  // update and create cart
  const updateandCreateHandler = async (productid, newQuantity) => {
    newQuantity = Number(newQuantity);
    if (newQuantity >= 1) {
      await cartCreateRequest(productid, newQuantity);
      const updateCart = cartList.map((item) =>
        item.productID === productid ? { ...item, qty: newQuantity } : item
      );
      dispatch(setCartList({ data: { data: updateCart } }));
    }
  };

  // update shiping cost 
  const getShippingCost = () => {
    if (selectedShipping === "inside") {
      return 70;
    } else if (selectedShipping === "outside") {
      return 170;
    } else if (selectedShipping === "free") {
      return 0;
    } else {
      return 0; // Default case
    }
  };  
  const shippingCost = getShippingCost();
  const total = shippingCost + subtotal;


  return (
    <div className="cart_details_section">
      <div className="container">
        <h1 className="ah-cart-title">Cart</h1>
        <div className="ah-progress-steps">
          <div className="ah-step ah-active">
            <div className="ah-step-number">1</div>
            <div className="ah-step-label">Shopping cart</div>
          </div>
          <div className="ah-step">
            <div className="ah-step-number">2</div>
            <div className="ah-step-label">Checkout details</div>
          </div>
          <div className="ah-step">
            <div className="ah-step-number">3</div>
            <div className="ah-step-label">Order complete</div>
          </div>
        </div>
        <div className="ah-cart-content">
          <div className="ah-cart-items">
            <div className="ah-cart-header">
              <div className="ah-product-header section-title">Product</div>
              <div className="ah-product-header section-title end">
                Quantity
              </div>
              <div className="ah-product-header section-title end">Price</div>
              <div className="ah-product-header section-title end">
                Subtotal
              </div>
            </div>
            {cartList.length > 0 ? (
              cartList.map((product, id) => (
                <div key={id} className="ah-cart-item">
                  <div className="ah-product-info">
                    <div className="ah-product-image">
                      <img src={product?.product?.image} />
                    </div>
                    <div className="ah-product-details">
                      <div className="ah-product-name">
                        {product.product.title}
                        <div className="phone-price-ah">
                          TK. {product.price}
                        </div>
                      </div>
                      <div className="ah-product-color">
                        Color : {product.color}
                        <svg
                          onClick={() => removeItem(product.productID)}
                          className="phone-svg-remove"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                            fill="#6C7275"
                          />
                        </svg>
                      </div>
                      <button
                        className="ah-remove-button"
                        onClick={() => removeItem(product.productID)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                            fill="#6C7275"
                          />
                        </svg>
                        Remove
                      </button>
                      <div className="ah-quantity-controls ah-quantity-control-phone">
                        <button
                          className="ah-quantity-btn"
                          onClick={() =>
                            updateandCreateHandler(
                              product.productID,
                              Number(product.qty) - 1
                            )
                          }
                        >
                          −
                        </button>
                        <span className="ah-quantity-value">{product.qty}</span>
                        <button
                          className="ah-quantity-btn"
                          onClick={() =>
                            updateandCreateHandler(
                              product.productID,
                              Number(product.qty) + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ah-quantity-controls ah-quantity-conterol-desktop">
                    <button
                      className="ah-quantity-btn"
                      onClick={() =>
                        updateandCreateHandler(
                          product.productID,
                          Number(product.qty) - 1
                        )
                      }
                    >
                      −
                    </button>
                    <span className="ah-quantity-value">{product.qty}</span>
                    <button
                      className="ah-quantity-btn"
                      onClick={() =>
                        updateandCreateHandler(
                          product.productID,
                          Number(product.qty) + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="ah-price">TK. {product.product.price}</div>
                  <div className="ah-subtotal">
                    TK. {product.product.price * product.qty}
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart-message">Your cart is empty !</p>
            )}
          </div>

          <div className="ah-cart-summary">
            <h2 className="ah-summary-title">Cart summary</h2>

            <div className="shpping_area_wrapper">

              <div className={`shoppingArea ${selectedShipping==="inside"?("selected-shipping"):("")}`}>
                <div className="shipping_tab"
                  onClick={()=>setSelectedShipping("inside")}
                >
                  <div className="shoppingName">
                  {selectedShipping === "inside" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="0.5"
                          width="18"
                          height="18"
                          rx="9"
                          stroke="#121212"
                          stroke-linejoin="bevel"
                        />
                        <circle cx="10" cy="9.5" r="5" fill="#121212" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="0.5"
                          width="18"
                          height="18"
                          rx="9"
                          stroke="#6C7275"
                          strokeLinejoin="bevel"
                        />
                      </svg>
                    )}
                    <p className="shiping-text">Inside Dhaka</p>
                  </div>
                  <div className="shiping_price">
                    <h4 className="price">TK. 70</h4>
                  </div>
                </div>
              </div>
              <div className={`shoppingArea ${selectedShipping==="outside"?("selected-shipping"):("")}`}>
                <div className="shipping_tab"
                onClick={()=>setSelectedShipping("outside")}
                >
                  <div className="shoppingName">
                  {selectedShipping === "outside" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="0.5"
                          width="18"
                          height="18"
                          rx="9"
                          stroke="#121212"
                          stroke-linejoin="bevel"
                        />
                        <circle cx="10" cy="9.5" r="5" fill="#121212" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="0.5"
                          width="18"
                          height="18"
                          rx="9"
                          stroke="#6C7275"
                          strokeLinejoin="bevel"
                        />
                      </svg>
                    )}
                    <p className="shiping-text">Outside Dhaka</p>
                  </div>
                  <div className="shiping_price">
                    <h4 className="price">TK. 170</h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="ah-summary-row ah-subtotal">
              <span className="section-title">Subtotal</span>
              <span className="ah-summary-value section-title">
                TK. {subtotal}
              </span>
            </div>

            <div className="ah-summary-row ah-total">
              <span className="section-title">Total</span>
              <span className="ah-summary-value section-title">
                TK. {total}
              </span>
            </div>
            <a href="/checkout" className="ah-checkout-button">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
