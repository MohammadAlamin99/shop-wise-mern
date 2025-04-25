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
  const [load, setLoad] = useState(4);
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
                                item["discountPrice"] === 0
                                  ? "none"
                                  : "block",
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
