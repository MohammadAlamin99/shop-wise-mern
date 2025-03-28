import React from "react";

const EditWishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: "Tray Table",
      color: "Black",
      price: "$19.19",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Sofa",
      color: "Beige",
      price: "$345",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Bamboo basket",
      color: "Beige",
      price: "$8.80",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Pillow",
      color: "Beige",
      price: "$8.80",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const handleRemoveItem = (id) => {
    console.log(`Remove item ${id} from wishlist`);
    // Implementation would filter out the item with this id
  };

  const handleAddToCart = (id) => {
    console.log(`Add item ${id} to cart`);
    // Implementation would add the item to the cart
  };

  return (
    <div>
      <div className="main-content-section">
        <section className="wishlist-section">
          <h2 className="section-title">Your Wishlist</h2>

          <div className="wishlist-container">
            <div className="wishlist-header">
              <div className="wishlist-product-header">Product</div>
              <div className="wishlist-price-header">Price</div>
              <div className="wishlist-action-header">Action</div>
            </div>

            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-item">
                <div className="wishlist-product">
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label="Remove from wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className="product-image">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-color">Color: {item.color}</p>
                  </div>
                </div>
                <div className="wishlist-price">{item.price}</div>
                <div className="wishlist-action">
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditWishlist;
