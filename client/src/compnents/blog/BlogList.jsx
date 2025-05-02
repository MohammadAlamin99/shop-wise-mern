import React from "react";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "7 ways to decor your home like a professional",
      date: "October 16, 2023",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Inside a beautiful kitchen organization",
      date: "October 16, 2023",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Decor your bedroom for your children",
      date: "October 16, 2023",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
  ];
  return (
    <>
      <div className="blog_section">
        <div className="container">
          <div className="blog-header">
            <div className="blog-tabs">
              <button className="tab active">All Blog</button>
              <button className="tab">Featured</button>
            </div>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image">
                  <a href="/blogDetails">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="load-more">
            <button className="load-more-button">Show more</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogList;
