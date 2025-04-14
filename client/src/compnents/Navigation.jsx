import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/navigation-img/log.png";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import { getAllCartRequest } from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "../redux/state-slice/cartList-slice";
const Navigation = () => {
  const svgRef = useRef("");
  const [active, setActive] = useState(false);
  const [cartactive, setcartActive] = useState(false);
  const [fixed, setFixed] = useState(false);
  const cartListData = useSelector((state) => state.getCartList.cartList);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setActive(!active);
  };
  const CartonClickHandler = () => {
    setcartActive(!cartactive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [0]);

  // carlist request

  useEffect(() => {
    (async () => {
      let result = await getAllCartRequest();
      dispatch(setCartList(result));
    })();
  }, []);

  const cartItemCount =
    cartListData &&
    cartListData.data &&
    cartListData.data.data &&
    cartListData.data.data.length > 0
      ? cartListData.data.data.length
      : 0;

  return (
    <div>
      <MobileMenu isActive={active} isSetActive={setActive} />
      <CartDrawer iscartActive={cartactive} isSetcartActive={setcartActive} />
      <section className={`navigation-section ${fixed ? "fixed" : ""}`}>
        <div className="navigation-warapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="left">
                  <div className="logo">
                    <svg
                      onClick={onClickHandler}
                      ref={svgRef}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 8H17M7 12H17M7 16H17"
                        stroke="#141718"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    <a href="/">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="middle">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <a href="/">home</a>
                      </li>
                      <li>
                        <a href="/shop">Shop</a>
                      </li>
                      <li>
                        <a href="/blog">Blogs</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="right">
                  <div className="navigation-right-icon">
                    <a href="/search">
                      <svg
                        className="search-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                          stroke="#141718"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                    <a href="/account">
                      <svg
                        className="user-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                          stroke="#141718"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>

                    <svg
                      onClick={CartonClickHandler}
                      className="cart"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                        stroke="#141718"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z"
                        stroke="#141718"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h5>{cartItemCount}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigation;

// import { useEffect, useRef, useState } from "react";
// import logo from "../assets/images/navigation-img/log.png";
// import MobileMenu from "./MobileMenu";
// import CartDrawer from "./CartDrawer";
// import { getAllCartRequest, searchRequest } from "../apiRequest/apiRequiest";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartList } from "../redux/state-slice/cartList-slice";

// const Navigation = () => {
//   const svgRef = useRef("");
//   const searchInputRef = useRef(null);
//   const searchContainerRef = useRef(null);
//   const [active, setActive] = useState(false);
//   const [cartactive, setcartActive] = useState(false);
//   const [fixed, setFixed] = useState(false);
//   const [searchActive, setSearchActive] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const cartListData = useSelector((state) => state.getCartList.cartList);
//   const [searchdata, setSearchdata] = useState([]);
//   const dispatch = useDispatch();

//   const onClickHandler = () => {
//     setActive(!active);
//   };

//   const CartonClickHandler = () => {
//     setcartActive(!cartactive);
//   };
//   const handleSearchClick = async () => {
//     let searchkeyword = searchInputRef?.current?.value;
//     console.log(searchkeyword)
//     let data = await searchRequest(searchkeyword);
//     setSearchdata(data)
//     console.log(data);

//     setSearchActive(!searchActive);
//     if (!searchActive) {
//       setTimeout(() => {
//         searchInputRef.current?.focus();
//       }, 100);
//     }
//   };
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() !== "") {
//       const filteredResults = searchdata?.filter((item) =>
//         item.title.toLowerCase().includes(query.toLowerCase())
//       );

//       setSearchResults(filteredResults);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (
//       searchContainerRef.current &&
//       !searchContainerRef.current.contains(event.target) &&
//       !event.target.classList.contains("search-svg")
//     ) {
//       setSearchActive(false);
//       setSearchResults([]);
//       setSearchQuery("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Escape") {
//       setSearchActive(false);
//       setSearchResults([]);
//       setSearchQuery("");
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setFixed(true);
//       } else {
//         setFixed(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     // Add event listeners for closing search
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   // carlist request
//   useEffect(() => {
//     (async () => {
//       const result = await getAllCartRequest();
//       dispatch(setCartList(result));
//     })();
//   }, []);

//   const cartItemCount =
//     cartListData &&
//     cartListData.data &&
//     cartListData.data.data &&
//     cartListData.data.data.length > 0
//       ? cartListData.data.data.length
//       : 0;

//   return (
//     <div>
//       <MobileMenu isActive={active} isSetActive={setActive} />
//       <CartDrawer iscartActive={cartactive} isSetcartActive={setcartActive} />
//       <section className={`navigation-section ${fixed ? "fixed" : ""}`}>
//         <div className="navigation-warapper">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="left">
//                   <div className="logo">
//                     <svg
//                       onClick={onClickHandler}
//                       ref={svgRef}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="32"
//                       height="32"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <path
//                         d="M7 8H17M7 12H17M7 16H17"
//                         stroke="#141718"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     <a href="/">
//                       <img src={logo || "/placeholder.svg"} alt="" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="middle">
//                   <nav className="main-nav">
//                     <ul>
//                       <li>
//                         <a href="/">home</a>
//                       </li>
//                       <li>
//                         <a href="/shop">Shop</a>
//                       </li>
//                       <li>
//                         <a href="#">Product</a>
//                       </li>
//                       <li>
//                         <a href="#">Contact Us</a>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//                 <div className="right">
//                   <div className="navigation-right-icon">
//                     <div className="search-container" ref={searchContainerRef}>
//                       <svg
//                         className="search-svg"
//                         onClick={handleSearchClick}
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
//                           stroke="#141718"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>

//                       {searchActive && (
//                         <div className="search-input-container">
//                           <input
//                             ref={searchInputRef}
//                             type="text"
//                             placeholder="Search products..."
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                             className="search-input"
//                           />

//                           {searchResults.length > 0 && (
//                             <div className="search-results">
//                               <ul>
//                                 {searchResults.map((result, index) => (
//                                   <li
//                                     key={index}
//                                     onClick={() => {
//                                       setSearchQuery(result.title|| "fuc");
//                                       setSearchResults([]);
//                                       // setSearchQuery(result);
//                                       // setSearchResults([]);
//                                     }}
//                                   >
//                                     {result}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>

//                     <a href="/account">
//                       <svg
//                         className="user-svg"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
//                           stroke="#141718"
//                           strokeWidth="1.5"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>

//                     <svg
//                       onClick={CartonClickHandler}
//                       className="cart"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <path
//                         d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
//                         stroke="#141718"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z"
//                         stroke="#141718"
//                         strokeWidth="1.5"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <h5>{cartItemCount}</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Navigation;
