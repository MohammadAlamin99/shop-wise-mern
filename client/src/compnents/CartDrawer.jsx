import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "../redux/state-slice/cartList-slice";
import { removeCartRequest } from "../apiRequest/apiRequiest";
const CartDrawer = ({ iscartActive, isSetcartActive }) => {
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];
  const dispatch = useDispatch();
  // Calculate subtotal
  const subtotal = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const total = subtotal;

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartList(
        cartList.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to remove item

  const removeItem = async (id) => {
     await removeCartRequest(id);
     const updatedCart = cartList.filter((item) => item.productID !== id);
     dispatch(setCartList({ data: { data: updatedCart } }));
  };

  return (
    <div>
      <div
        className={`cartOverlay ${iscartActive ? "cartOverlayActive" : ""}`}
      ></div>
      <div className={`cart-container ${iscartActive ? "activeCart" : ""}`}>
        <div className="cart-text-wrapper">
          <h3 className="cart-title">Cart</h3>
          <svg
            onClick={() => isSetcartActive(false)}
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
                <div className="item-image">
                  {item.product.image ? (
                    <img src={item?.product?.image} />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </div>

                <div className="item-details">
                  <div className="item-header">
                    <h2 className="item-name">{item.name}</h2>
                    <span className="item-price">
                      TK. {item.price}
                    </span>
                  </div>

                  <p className="item-color">Color: {item.color}</p>

                  <div className="item-actions">
                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={()=> removeItem(item.productID)}
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
            <span className="summary-value">TK. {subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span className="summary-label">Total</span>
            <span className="summary-value">TK. {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button className="checkout-btn">Checkout</button>
          <a href="/cart" className="view-cart-link">
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
