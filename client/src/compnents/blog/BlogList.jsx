import React from "react";
import image from "../../assets/images/Shop-Page/shop_banner.jpeg"

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "7 ways to decor your home like a professional",
      date: "October 16, 2023",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Inside a beautiful kitchen organization",
      date: "October 16, 2023",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Decor your bedroom for your children",
      date: "October 16, 2023",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
  ];
  return (
    <div>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-tabs">
            <button className="tab active">All Blog</button>
            <button className="tab">Featured</button>
          </div>
          <div className="blog-view-options">
            <div className="sort-dropdown">
              <span>Sort by</span>
              <svg
                className="dropdown-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
            <div className="view-buttons">
              <button className="view-button grid-view active">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"></path>
                </svg>
              </button>
              <button className="view-button list-view">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M3 9h18V7H3zm0 4h18v-2H3zm0 4h18v-2H3z"></path>
                </svg>
              </button>
              <button className="view-button compact-view">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                </svg>
              </button>
              <button className="view-button detailed-view">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zm0-8h14V7H7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-button">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
