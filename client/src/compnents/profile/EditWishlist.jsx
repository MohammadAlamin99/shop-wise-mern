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
              <div className="wishlist-price-header wishlist-product-header">
                Price
              </div>
              <div className="wishlist-action-header wishlist-product-header">
                Action
              </div>
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
                  </button>
                  <div className="product-image">
                    <img
                      src="https://scontent.fdac176-1.fna.fbcdn.net/v/t39.30808-6/488057385_1583484779032081_4258389172375339469_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF4NvVabyZGRbAGEdzsWRrdJWCGehfSJqIlYIZ6F9ImovBLcwNdtA93-wX_rbfPdgVwrUScIUJG-cU3cigVYt2I&_nc_ohc=vt05XHyYLrgQ7kNvgFK55Hr&_nc_oc=AdlXrKOFB0bh-Tz8r95WhRvNQtasyAzVwPvS2Rm2hZ776jWq6DtXREyaR78gewr14L4&_nc_zt=23&_nc_ht=scontent.fdac176-1.fna&_nc_gid=hQzCiSDF7olEZHnC31hHvA&oh=00_AYGUiZNAwCnvQUD1AgZ-lY5li9Ck-sOwZNn9L1rPIN4c3w&oe=67F33C24"
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
