import React, { useEffect, useRef, useState } from "react";
import {
  createReveiwRequest,
  getReviewRequest,
} from "../apiRequest/apiRequiest";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setReview } from "../redux/state-slice/review-slice";
const Review = ({ productId }) => {
  const [activeTab, setActiveTab] = useState("Reviews");
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [load, setLoad] = useState(5);
  const review = useSelector((state) => state.getReview.review);
  const dispatch = useDispatch();
  const getdata = review?.data?.data?.reviews;

  const userDetailsString = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(userDetailsString);
  const userID = userDetails?.id;
  const reviewRef = useRef();
  const reviewHandler = async () => {
    const review = reviewRef.current.value;

    if (!review) {
      toast.error("Please Write Review.");
      return;
    }
    if (!selectedRating) {
      toast.error("Please Select Ratings.");
      return;
    }
    const result = await createReveiwRequest(
      userID,
      productId,
      selectedRating,
      review
    );
    if (result?.data?.status === "fail") {
      toast.error(result?.data?.data);
    } else {
      toast.error("Something Went Wrong");
    }
  };
  useEffect(() => {
    (async () => {
      const getReview = await getReviewRequest(productId);
      dispatch(setReview(getReview));
    })();
  }, []);

  const renderRatingStars = () => {
    return Array(5)
      .fill(0)
      .map((item, id) => {
        const ratingValue = id + 1;
        return (
          <span
            key={id}
            className={`rating-star ${
              ratingValue <= (hoverRating || selectedRating) ? "filled" : ""
            }`}
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setSelectedRating(ratingValue)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill={
                ratingValue <= (hoverRating || selectedRating)
                  ? "#141718"
                  : "none"
              }
              stroke={
                ratingValue <= (hoverRating || selectedRating)
                  ? "none"
                  : "#6C7275"
              }
            >
              <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" />
            </svg>
          </span>
        );
      });
  };

  const renderStaticRatingStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((item, i) => {
        const isFiled = i < rating;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill={isFiled ? "#141718" : "none"}
            stroke={isFiled ? "#141718" : "#6C7275"}
          >
            <path d="M7.3879 2.08514C7.6195 1.54844 8.38051 1.54844 8.61211 2.08514L10.0655 5.45307C10.1635 5.68032 10.3794 5.83454 10.6262 5.85361L14.3533 6.14161C14.9513 6.18781 15.1889 6.93852 14.7264 7.32038L11.9235 9.63456C11.7258 9.79779 11.6392 10.0599 11.7008 10.3088L12.5634 13.7944C12.7053 14.3676 12.0869 14.8286 11.578 14.529L8.33822 12.6217C8.12949 12.4988 7.87053 12.4988 7.66179 12.6217L4.42197 14.529C3.9131 14.8286 3.29475 14.3676 3.43661 13.7944L4.29924 10.3088C4.36083 10.0599 4.27425 9.79779 4.07654 9.63456L1.27362 7.32038C0.811112 6.93852 1.04872 6.18781 1.64671 6.14161L5.37381 5.85361C5.62058 5.83454 5.83648 5.68032 5.93455 5.45307L7.3879 2.08514Z" />
          </svg>
        );
      });
  };



  // load more functionality
  const handlerLoadeMore = () => {
    setLoad((count) => count + 3);
  };
  const commentToDisplay = getdata?.slice(0, load);


  const renderTabContent = () => {
    switch (activeTab) {
      case "Additional Info":
        return (
          <div className="tab-content">
            Additional information content goes here
          </div>
        );
      case "Questions":
        return <div className="tab-content">Questions content goes here</div>;
      case "Reviews":
        return (
          <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className="review-section">
              <h3 className="review-head categroy-text">Customer Reviews</h3>

              <div className="overall-rating">
                <div className="stars-container">
                <div className="rating">
                            {[...Array(5)].map((_, i) => {
                              const rating = review?.data?.data.averageRating || 0;
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
                                        <stop
                                          offset="50%"
                                          stopColor="#343839"
                                        />
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
                  <span className="section-title reviews-count">
                    {review?.data?.data.totalReviews || 0} Reviews
                  </span>
                </div>
                <div className="section-title product-name">Tray Table</div>
              </div>

              <div className="yourRatting">
                <p className="rating-text">Your Rating * :</p>
                <div className="your_rating">{renderRatingStars()}</div>
              </div>
              <div className="review-actions">
                <textarea
                  className="review-input"
                  ref={reviewRef}
                  type="text"
                  placeholder="Write Review *"
                />
                <button
                  onClick={reviewHandler}
                  className="newsfeed write-review-btn"
                >
                  Write Review
                </button>
              </div>

              <div className="reviews-list-header">
                <h2 className="categroy-text show-rev-num">11 Reviews</h2>
              </div>

              <div className="reviews-list">
                {commentToDisplay?.map((review) => (
                  <div className="review-item" key={review.id}>
                    <div className="review-avatar">
                      <img src={review?.userInfo?.image} />
                    </div>
                    <div className="review-content">
                      <h3 className="categroy-text reviewer-name">
                        {review?.userInfo?.fullName}
                      </h3>
                      <div className="review-stars">
                        {renderStaticRatingStars(review?.rating)}
                      </div>
                      <p className="section-title review-text">
                        {review?.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {load < getdata?.length && (
                <div className="load-more-container">
                  <button className="load-more-btn" onClick={handlerLoadeMore}>
                    Load more
                  </button>
                </div>
              )}
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="review-section">
        <div className="container">
          <div className="tabs-container">
            <button
              className={`tab-button ${
                activeTab === "Additional Info" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Additional Info")}
            >
              Additional Info
            </button>
            <button
              className={`tab-button ${
                activeTab === "Questions" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Questions")}
            >
              Questions
            </button>
            <button
              className={`tab-button ${
                activeTab === "Reviews" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </button>
          </div>
          {renderTabContent()}
        </div>
      </section>
    </div>
  );
};

export default Review;
