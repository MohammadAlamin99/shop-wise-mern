import React, { useEffect } from "react";
import {
  cartCreateRequest,
  getWishListRequest,
  removeWishListRequest,
} from "../../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setWish } from "../../redux/state-slice/wishList-slice";
import toast, { Toaster } from "react-hot-toast";

const EditWishlist = () => {
  const wishlistData = useSelector((state) => state.getWishList.wish);
  const wishlist = wishlistData?.data?.data || [];
  console.log(wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await getWishListRequest();
      dispatch(setWish(data));
    })();
  }, []);

  const handleRemoveItem = async (id) => {
    await removeWishListRequest(id);
    const updatedWishlist = wishlist.filter((item) => item.productID !== id);
    dispatch(setWish({ data: { data: updatedWishlist } }));
    toast.success("Item removed from wishlist!");
  };

  const handleAddToCart = async (id) => {
    window.location.reload();
    let qty = 1;
    let color = "";
    let size = "";
    let data = await cartCreateRequest(id, qty, color, size);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="main-content-section">
        <section className="wishlist-section">
          <h2 className="section-title">Your Wishlist</h2>

          <div className="wishlist-container">
            <div className="wishlist-header">
              <div className="wishlist-product-header">Product</div>
              <div className="wishlist-price-header wishlist-product-header">
                Price
              </div>
              <div className="wishlist-action-header wishlist-product-header">
                Action
              </div>
            </div>
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-product">
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItem(item?.productID)}
                      aria-label="Remove from wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                          fill="#6C7275"
                        />
                      </svg>
                    </button>
                    <div className="product-image">
                      <img src={item?.product?.image} alt="" />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{item?.product?.title}</h3>
                      <p className="product-color">Color: {item.color}</p>
                    </div>
                  </div>
                  <div className="wishlist-price">
                    TK. {item?.product?.price}
                  </div>
                  <div className="wishlist-action">
                    <button
                      type="button"
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(item.productID)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty--message">Your wishlist is empty.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditWishlist;
