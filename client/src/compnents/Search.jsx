import React, { useRef, useState } from "react";
import { searchRequest } from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/state-slice/search-slice";

const Search = () => {
  const [load, setLoad] = useState(4);

  const dispatch = useDispatch();
  const getSearch = useSelector((state) => state.getSearch.search);
  const search = getSearch?.data?.data || [];

  const searchRef = useRef();
  const searchdataHander = async () => {
    const search = searchRef.current.value;
    let result = await searchRequest(search);
    dispatch(setSearch(result));
  };
  //   load more button functionality
  const handleLoadMore = () => {
    setLoad((count) => count + 3);
  };
  const productToDisplay = search?.slice(0, load);

  console.log(getSearch);

  return (
    <div>
      <section className="shop-collection">
        <div className="container">
          <div className="searchWrapper">
            <input ref={searchRef} type="text" placeholder="Search...."/>
            <button onClick={searchdataHander}>search</button>
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
