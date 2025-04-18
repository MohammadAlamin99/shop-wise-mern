import React, { useState } from "react";

const Review = () => {

  const reviews = [
    {
      id: 1,
      name: "Sofia Harvetz",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
      likes: 0,
    },
    {
      id: 2,
      name: "Nicolas Jensen",
      avatar: "/avatar2.jpg",
      rating: 5,
      text: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
      likes: 0,
    },
    {
      id: 3,
      name: "Nicolas Jensen",
      avatar: "/avatar3.jpg",
      rating: 5,
      text: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
      likes: 0,
    },
    {
      id: 4,
      name: "Nicolas Jensen",
      avatar: "/avatar4.jpg",
      rating: 5,
      text: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
      likes: 0,
    },
    {
      id: 5,
      name: "Nicolas Jensen",
      avatar: "/avatar5.jpg",
      rating: 5,
      text: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
      likes: 0,
    },
  ];


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
              fill="#141718"
            />
          </svg>
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <section className="review-section">
        <div className="container">
          <h3 className="review-head categroy-text">Customer Reviews</h3>

          <div className="overall-rating">
            <div className="stars-container">
              {renderStars(4)}
              <span className="section-title reviews-count">11 Reviews</span>
            </div>
            <div className="section-title product-name">Tray Table</div>
          </div>

          <div className="review-actions">
            <input type="text" placeholder="Write Review"/>
            <button className="newsfeed write-review-btn">Write Review</button>
          </div>

          <div className="reviews-list-header">
            <h2 className="categroy-text show-rev-num">11 Reviews</h2>
          </div>

          <div className="reviews-list">
            {reviews.map((review) => (
              <div className="review-item" key={review.id}>
                <div className="review-avatar">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
                    alt={review.name}
                  />
                </div>
                <div className="review-content">
                  <h3 className="categroy-text reviewer-name">{review.name}</h3>
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                  <p className="section-title review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more-container">
            <button className="load-more-btn">Load more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
