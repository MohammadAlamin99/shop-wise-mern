// import React, { useRef, useState } from "react";
// import { searchRequest } from "../apiRequest/apiRequiest";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "../redux/state-slice/search-slice";

// const Search = () => {
//   const [load, setLoad] = useState(4);

//   const dispatch = useDispatch();
//   const getSearch = useSelector((state) => state.getSearch.search);
//   const search = getSearch?.data?.data || [];

//   const searchRef = useRef();
//   const searchdataHander = async () => {
//     const search = searchRef.current.value;
//     let result = await searchRequest(search);
//     dispatch(setSearch(result));
//   };
//   //   load more button functionality
//   const handleLoadMore = () => {
//     setLoad((count) => count + 3);
//   };
//   const productToDisplay = search?.slice(0, load);

//   return (
//     <div>
//       <section className="shop-collection">
//         <div className="container">
//           <div className="searchWrapper">
//             <input ref={searchRef} type="text" placeholder="Search...."/>
//             <button onClick={searchdataHander}>search</button>
//           </div>
//           <div className="Search-text-wrapper">
//             <h4 className="categroy-text">Search Result</h4>
//           </div>
//           <div className="row searchrow">
//             {productToDisplay.length > 0
//               ? productToDisplay.map((item, i) => {
//                   return (
//                     <div className="col-lg-3" key={i}>
//                       <div className="product-card">
//                         <div className="img_box_wrapper">
//                           <div className="badge common-shop-now-btn">NEW</div>
//                           <div className="common-shop-now-btn discount-badge">
//                             {item.discountPercentage
//                               ? item.discountPercentage
//                               : ""}
//                           </div>
//                           <a href="#">
//                             <img src={item.image} alt="Collection Image" />
//                           </a>
//                         </div>
//                         <div className="rating">
//                           <span className="star">★</span>
//                           <span className="star">★</span>
//                           <span className="star">★</span>
//                           <span className="star">★</span>
//                           <span className="star">★</span>
//                         </div>
//                         <h2 className="product-title">{item["title"]}</h2>
//                         <div className="price">
//                           <span className="current-price">
//                             TK. {item["price"]}
//                           </span>
//                           <span
//                             className="original-price"
//                             style={{
//                               display:
//                                 item["discountPrice"] == 0 ? "none" : "block",
//                             }}
//                           >
//                             TK. {item["discountPrice"]}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               : "Search Result(0)"}
//           </div>

//           {load < search.length && (
//             <button className="search-morebtn" onClick={handleLoadMore}>
//               Load More
//             </button>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Search;

import React, { useRef, useState } from "react";
import { searchRequest } from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/state-slice/search-slice";

const Search = () => {
  const [load, setLoad] = useState(12);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const getSearch = useSelector((state) => state.getSearch.search);
  const search = getSearch?.data?.data || [];

  const searchRef = useRef();

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = debounce(async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const result = await searchRequest(query);
    const items = result?.data?.data || [];
    setSuggestions(items.slice(0, 5));
  }, 300);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  const searchdataHander = async () => {
    const query = searchRef.current.value;
    const result = await searchRequest(query);
    dispatch(setSearch(result));
    setSuggestions([]);
  };

  const handleSuggestionClick = async (item) => {
    setInputValue(item.title);
    setSuggestions([]);
    const result = await searchRequest(item.title);
    dispatch(setSearch(result));
  };

  const handleLoadMore = () => {
    setLoad((count) => count + 3);
  };

  const productToDisplay = search?.slice(0, load);

  return (
    <div>
      <section className="shop-collection">
        <div className="container">
          <div className="searchWrapper" style={{ position: "relative" }}>
            <input
              ref={searchRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search...."
            />
            <button onClick={searchdataHander}>Search</button>

            {/* Prediction List */}
            {suggestions.length > 0 && (
              <ul className="search-suggestions">
                {suggestions.map((item, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(item)}>
                    <img src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="Search-text-wrapper">
            <h4 className="categroy-text">Search Result</h4>
          </div>

          <div className="row searchrow">
            {productToDisplay.length > 0
              ? productToDisplay.map((item, i) => {
                  return (
                    <div className="col-lg-3" key={i}>
                      <div className="product-card">
                        <div className="img_box_wrapper">
                          <div className="badge common-shop-now-btn">
                            {item?.remark}
                          </div>
                          {item.discountPrice &&
                            item.discountPrice > item.price && (
                              <div className="common-shop-now-btn discount-badge">
                                {Math.round(
                                  ((item.discountPrice - item.price) /
                                    item.discountPrice) *
                                    100
                                )}
                                % OFF
                              </div>
                            )}

                          <a href={"/product-details/" + item?._id}>
                            <img src={item.image} alt="Collection Image" />
                          </a>
                        </div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => {
                            const rating = item.averageRating || 0;
                            const starValue = i + 1;

                            if (rating >= starValue) {
                              // Full star
                              return (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="#343839"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" />
                                </svg>
                              );
                            } else if (rating >= starValue - 0.5) {
                              // half star
                              return (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                >
                                  <defs>
                                    <linearGradient
                                      id={`half-star-${i}`}
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop offset="50%" stopColor="#343839" />
                                      <stop offset="50%" stopColor="#ccc" />
                                    </linearGradient>
                                  </defs>
                                  <path
                                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                    fill={`url(#half-star-${i})`}
                                  />
                                </svg>
                              );
                            } else {
                              // Empty star
                              return (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="#ccc"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" />
                                </svg>
                              );
                            }
                          })}
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
                                item["discountPrice"] === 0 ? "none" : "block",
                            }}
                          >
                            TK. {item["discountPrice"]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "Search Result(0)"}
          </div>

          {load < search.length && (
            <button className="search-morebtn" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
