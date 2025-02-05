import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductRequiest } from "../../apiRequest/apiRequiest";
import { setProduct } from "../../redux/state-slice/product-slice";

const Collection = () => {
  const productData = useSelector((state) => state.getProduct.product);
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await allProductRequiest();
      dispatch(setProduct(result));
    })();
  }, [dispatch]);

  const handlePriceRangeChange = (range) => {
    setPriceRange((prev) => {
      if (prev.includes(range)) {
        return prev.filter((r) => r !== range);
      } else {
        return [...prev, range];
      }
    });
  };

  const filterProductsByPrice = (products) => {
    if (priceRange.length === 0) return products;

    return products.filter((product) => {
      return priceRange.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return product.price >= min && (max ? product.price <= max : true);
      });
    });
  };

  const filteredProducts = filterProductsByPrice(productData);

  return (
    <div>
      <section className="shop-collection">
        <div className="container">
          <div className="row custom-row">
            <div className="col-lg-12"></div>
            <div className="left-filter">
              <div className="filter-wrapper">
                <div className="filter-head">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
                      stroke="#141718"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h4 className="categroy-text">Filter</h4>
                </div>
                <h4 className="newsfeed">CATEGORIES</h4>
                <ul>
                  <li>All Rooms</li>
                  <li>Living Room</li>
                  <li>Bedroom</li>
                  <li>Kitchen</li>
                  <li>Dinning</li>
                  <li>Outdoor</li>
                </ul>
              </div>
              <div className="filter-wrapper filter-wrapper2">
                <h4 className="newsfeed">PRICE</h4>
                <ul>
                  <li>
                    <label>
                      All Price
                      <input
                        type="checkbox"
                        checked={priceRange.length === 0}
                        onChange={() => setPriceRange([])}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      $0.00 - 99.99
                      <input
                        type="checkbox"
                        onChange={() => handlePriceRangeChange("0-99.99")}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      $100.00 - 199.99
                      <input
                        type="checkbox"
                        onChange={() => handlePriceRangeChange("100-199.99")}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      $200.00 - 299.99
                      <input
                        type="checkbox"
                        onChange={() => handlePriceRangeChange("200-299.99")}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      $300.00 - 399.99
                      <input
                        type="checkbox"
                        onChange={() => handlePriceRangeChange("300-399.99")}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      $400.00+
                      <input
                        type="checkbox"
                        onChange={() => handlePriceRangeChange("400-")}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-product">
              <div className="right-top-heading">
                <div className="text-wrapper">
                  <h4 className="categroy-text">Living Room</h4>
                  <div className="right-grid">
                    <select className="selet-filter">
                      <option className="option" selected>
                        Sort by
                      </option>
                      <option className="option" value="1">
                        Name (A - Z)
                      </option>
                      <option className="option" value="2">
                        Name (Z - A)
                      </option>
                      <option className="option" value="3">
                        Price (Low &gt; High)
                      </option>
                      <option className="option" value="4">
                        Price (High &gt; Low)
                      </option>
                    </select>
                    <div className="icon-grid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75V19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5H5.25C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25V15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5H8.75ZM18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75V19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5H15.25C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25V15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5H18.75ZM8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75V9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5H5.25C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25V5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5H8.75ZM18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75V9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5H15.25C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25V5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5H18.75Z"
                          fill="#6C7275"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.75 13C9.34674 13 9.91903 13.2371 10.341 13.659C10.7629 14.081 11 14.6533 11 15.25V18.75C11 19.3467 10.7629 19.919 10.341 20.341C9.91903 20.7629 9.34674 21 8.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V15.25C3 14.6533 3.23705 14.081 3.65901 13.659C4.08097 13.2371 4.65326 13 5.25 13H8.75ZM18.75 13C19.3467 13 19.919 13.2371 20.341 13.659C20.7629 14.081 21 14.6533 21 15.25V18.75C21 19.3467 20.7629 19.919 20.341 20.341C19.919 20.7629 19.3467 21 18.75 21H15.25C14.6533 21 14.081 20.7629 13.659 20.341C13.2371 19.919 13 19.3467 13 18.75V15.25C13 14.6533 13.2371 14.081 13.659 13.659C14.081 13.2371 14.6533 13 15.25 13H18.75ZM8.75 3C9.34674 3 9.91903 3.23705 10.341 3.65901C10.7629 4.08097 11 4.65326 11 5.25V8.75C11 9.34674 10.7629 9.91903 10.341 10.341C9.91903 10.7629 9.34674 11 8.75 11H5.25C4.65326 11 4.08097 10.7629 3.65901 10.341C3.23705 9.91903 3 9.34674 3 8.75V5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H8.75ZM18.75 3C19.3467 3 19.919 3.23705 20.341 3.65901C20.7629 4.08097 21 4.65326 21 5.25V8.75C21 9.34674 20.7629 9.91903 20.341 10.341C19.919 10.7629 19.3467 11 18.75 11H15.25C14.6533 11 14.081 10.7629 13.659 10.341C13.2371 9.91903 13 9.34674 13 8.75V5.25C13 4.65326 13.2371 4.08097 13.659 3.65901C14.081 3.23705 14.6533 3 15.25 3H18.75Z"
                          fill="#6C7275"
                        />
                        <path d="M3 6H10.998V18H3V6Z" fill="#6C7275" />
                        <path d="M13.002 6H21V18H13.002V6Z" fill="#6C7275" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M12.9999 15.75C12.9999 15.1533 13.237 14.581 13.659 14.159C14.0809 13.7371 14.6532 13.5 15.2499 13.5L18.7499 13.5C19.3467 13.5 19.919 13.7371 20.3409 14.159C20.7629 14.581 20.9999 15.1533 20.9999 15.75L20.9999 19.25C20.9999 19.8467 20.7629 20.419 20.3409 20.841C19.919 21.2629 19.3467 21.5 18.7499 21.5L15.2499 21.5C14.6532 21.5 14.0809 21.2629 13.659 20.841C13.237 20.419 12.9999 19.8467 12.9999 19.25L12.9999 15.75ZM12.9999 5.75C12.9999 5.15326 13.237 4.58097 13.6589 4.15901C14.0809 3.73705 14.6532 3.5 15.2499 3.5L18.7499 3.5C19.3467 3.5 19.919 3.73705 20.3409 4.15901C20.7629 4.58097 20.9999 5.15326 20.9999 5.75L20.9999 9.25C20.9999 9.84674 20.7629 10.419 20.3409 10.841C19.919 11.2629 19.3467 11.5 18.7499 11.5L15.2499 11.5C14.6532 11.5 14.0809 11.2629 13.6589 10.841C13.237 10.419 12.9999 9.84674 12.9999 9.25L12.9999 5.75ZM2.99994 15.75C2.99994 15.1533 3.23699 14.581 3.65895 14.159C4.08091 13.7371 4.6532 13.5 5.24994 13.5L8.74994 13.5C9.34668 13.5 9.91897 13.7371 10.3409 14.159C10.7629 14.581 10.9999 15.1533 10.9999 15.75L10.9999 19.25C10.9999 19.8467 10.7629 20.419 10.3409 20.841C9.91897 21.2629 9.34668 21.5 8.74994 21.5L5.24994 21.5C4.6532 21.5 4.08091 21.2629 3.65895 20.841C3.23699 20.419 2.99994 19.8467 2.99994 19.25L2.99994 15.75ZM2.99994 5.75C2.99994 5.15326 3.23699 4.58097 3.65895 4.15901C4.08091 3.73705 4.6532 3.5 5.24994 3.5L8.74994 3.5C9.34668 3.5 9.91897 3.73705 10.3409 4.15901C10.7629 4.58097 10.9999 5.15326 10.9999 5.75L10.9999 9.25C10.9999 9.84674 10.7629 10.419 10.3409 10.841C9.91897 11.2629 9.34668 11.5 8.74994 11.5L5.24994 11.5C4.6532 11.5 4.08091 11.2629 3.65895 10.841C3.23699 10.419 2.99994 9.84674 2.99994 9.25L2.99994 5.75Z"
                          fill="#6C7275"
                        />
                        <path
                          d="M5.99994 21.5L5.99994 13.502L17.9999 13.502L17.9999 21.5L5.99994 21.5Z"
                          fill="#6C7275"
                        />
                        <path
                          d="M5.99994 11.498L5.99994 3.5L17.9999 3.5L17.9999 11.498L5.99994 11.498Z"
                          fill="#6C7275"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-row">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item, i) => {
                    return (
                      <div className="Custom-col" key={i}>
                        <div className="product-card">
                          <div className="img_box_wrapper">
                            <div className="badge common-shop-now-btn">NEW</div>
                            <div className="common-shop-now-btn discount-badge">
                              {item.discountPercentage
                                ? item.discountPercentage
                                : ""}
                            </div>
                            <a href="#">
                              <img src={item.image} alt="Collection Image" />
                            </a>
                          </div>
                          <div className="rating">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                          <h2 className="product-title">{item["title"]}</h2>
                          <div className="price">
                            <span className="current-price">
                              TK. {item["price"]}
                            </span>
                            <span
                              className="original-price"
                              style={{
                                display:
                                  item["discountPrice"] == 0 ? "none" : "block",
                              }}
                            >
                              TK. {item["discountPrice"]}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-center">No Data Found</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
