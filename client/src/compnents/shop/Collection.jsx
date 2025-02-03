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
          <div className="row">
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
