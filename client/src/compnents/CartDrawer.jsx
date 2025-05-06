import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "../redux/state-slice/cartList-slice";
import {
  removeCartRequest,
  cartCreateRequest,
} from "../apiRequest/apiRequiest";

const CartDrawer = ({ iscartActive, isSetcartActive, isOpen, onClose }) => {
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];
  const dispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cartList.reduce(
    (total, item) => total + item?.product?.price * item?.qty,
    0
  );
  const total = subtotal;

  // update and create cart
  const updateandCreateHandler = async (productid, newQuantity) => {
    newQuantity = Number(newQuantity);
    if (newQuantity >= 1) {
      await cartCreateRequest(productid, newQuantity);
      const updateCart = cartList.map((item) =>
        item?.productID === productid ? { ...item, qty: newQuantity } : item
      );
      dispatch(setCartList({ data: { data: updateCart } }));
    }
  };

  // Function to remove item
  const removeItem = async (id) => {
    await removeCartRequest(id);
    const updatedCart = cartList.filter((item) => item?.productID !== id);
    dispatch(setCartList({ data: { data: updatedCart } }));
  };

  return (
    <div>
      <div
        className={`cartOverlay ${
          iscartActive || isOpen ? "cartOverlayActive" : ""
        }`}
      ></div>
      <div
        className={`cart-container ${
          iscartActive || isOpen ? "activeCart" : ""
        }`}
      >
        <div className="cart-text-wrapper">
          <h3 className="cart-title">Cart</h3>
          <svg
            onClick={() => {
              if (typeof onClose === "function") onClose();
              if (typeof isSetcartActive === "function") isSetcartActive(false);
            }}
            className="cart-close"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#6C7275"
            />
          </svg>
        </div>

        <div className="cart-items">
          {cartList?.length > 0 ? (
            cartList.map((item, id) => (
              <div key={id} className="cart-item">
                <a
                  href={`/product-details/` + item?.productID}
                  className="item-image"
                >
                  {item?.product?.image ? (
                    <img src={item?.product?.image} />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </a>

                <div className="item-details">
                  <div className="item-header">
                    <h2 className="item-name">{item?.product?.title}</h2>
                    <span className="item-price">
                      TK. {item?.product?.price}
                    </span>
                  </div>
                  {item?.color && (
                    <p className="item-color">Color: {item?.color}</p>
                  )}
                  <div className="item-actions">
                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          item?.qty > 1 &&
                          updateandCreateHandler(
                            item?.productID,
                            Number(item?.qty) - 1
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.22925 8H12.5626"
                            stroke="#121212"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <span className="quantity-display">{item?.qty}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateandCreateHandler(
                            item?.productID,
                            Number(item?.qty) + 1
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.375 3.33301C8.375 3.1259 8.20711 2.95801 8 2.95801C7.79289 2.95801 7.625 3.1259 7.625 3.33301V7.62469H3.33325C3.12615 7.62469 2.95825 7.79259 2.95825 7.99969C2.95825 8.2068 3.12615 8.37469 3.33325 8.37469H7.625V12.6663C7.625 12.8734 7.79289 13.0413 8 13.0413C8.20711 13.0413 8.375 12.8734 8.375 12.6663V8.37469H12.6666C12.8737 8.37469 13.0416 8.2068 13.0416 7.99969C13.0416 7.79259 12.8737 7.62469 12.6666 7.62469H8.375V3.33301Z"
                            fill="#121212"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item?.productID)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                          fill="#6C7275"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart-message">Your cart is empty</p>
          )}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span className="summary-label">Subtotal</span>
            <span className="summary-value">TK. {subtotal}</span>
          </div>

          <div className="summary-row total">
            <span className="summary-label">Total</span>
            <span className="summary-value">TK. {total}</span>
          </div>
        </div>

        <div className="cart-actions">
          <a href="/checkout" className="checkout-btn">
            Checkout
          </a>
          <a href="/cart" className="view-cart-link">
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
