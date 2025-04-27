import image from "../../assets/images/contactImage.png"

const Contact = () => {
  return (
    <>
      <header className="contact-header-section">
        <div className="container">
          <div className="nav-links">
            <a href="/">
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.58423 3L7.58423 6L4.58423 9"
                  stroke="#605F5F"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="active">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main className="full-contact-wrapper">
        <section className="contact-hero">
          <div className="container">
            <h1 className="hero-title">
              We believe in sustainable decor. We're passionate about life at
              home.
            </h1>
            <p className="hero-description">
              Our features timeless furniture, with natural fabrics, curved
              lines, plenty of mirrors and classic design, which can be
              incorporated into any decor project. The pieces enchant for their
              sobriety, to last for generations, faithful to the shapes of each
              period, with a touch of the present
            </p>
          </div>
        </section>

        <section className="container">
          <div className="contact-about-section">
            <div className="about-image">
              <img
                src={image}
                alt="Cozy living room with orange sofa, plants, and modern decor"
              />
            </div>
            <div className="about-content">
              <h2 className="about-title">About Us</h2>
              <p className="about-text">
                3legant is a gift & decorations store based in HCMC, Vietnam.
                Est since 2019. Our customer service is always prepared to
                support you 24/7
              </p>
              <a href="#" className="shop-now">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M4.16666 10.5H15.8333"
                    stroke="#121212"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8333 15.5L15.8333 10.5"
                    stroke="#121212"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8333 5.5L15.8333 10.5"
                    stroke="#121212"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="main-contact-section">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M27.5 16V24C27.5 26.9455 25.1122 29.3333 22.1667 29.3333H11.5C8.55447 29.3333 6.16666 26.9455 6.16666 24V16"
                      stroke="#141718"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.1916 2.66797H10.475C8.05185 2.66797 5.87284 4.32764 4.97291 6.8587L3.96226 9.70113C3.65633 10.5616 3.44486 11.4823 3.668 12.3678C4.19646 14.465 5.91096 16.0013 7.94442 16.0013C10.399 16.0013 12.3889 13.7627 12.3889 11.0013C12.3889 13.7627 14.3787 16.0013 16.8333 16.0013C19.2879 16.0013 21.2778 13.7627 21.2778 11.0013C21.2778 13.7627 23.2676 16.0013 25.7222 16.0013C27.7557 16.0013 29.4702 14.465 29.9986 12.3678C30.2218 11.4823 30.0103 10.5616 29.7044 9.70113L28.6937 6.8587C27.7938 4.32764 25.6148 2.66797 23.1916 2.66797Z"
                      stroke="#141718"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.8333 25.332C12.8333 23.1229 14.6242 21.332 16.8333 21.332C19.0425 21.332 20.8333 23.1229 20.8333 25.332V29.332H12.8333V25.332Z"
                      stroke="#141718"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-card-title">ADDRESS</h3>
                <p className="contact-card-text">
                  234 Hai Trieu, Ho Chi Minh City, Viet Nam
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M28.5 25.3333V23.1388C28.5 22.0483 27.8361 21.0678 26.8237 20.6628L24.1115 19.5779C22.8238 19.0629 21.3563 19.6208 20.736 20.8613L20.5 21.3333C20.5 21.3333 17.1667 20.6667 14.5 18C11.8333 15.3333 11.1667 12 11.1667 12L11.6387 11.764C12.8792 11.1437 13.4371 9.67618 12.9221 8.38848L11.8372 5.67629C11.4322 4.66387 10.4517 4 9.36125 4H7.16667C5.69391 4 4.5 5.19391 4.5 6.66667C4.5 18.4487 14.0513 28 25.8333 28C27.3061 28 28.5 26.8061 28.5 25.3333Z"
                      stroke="#141718"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-card-title">CONTACT US</h3>
                <p className="contact-card-text">+84 234 567 890</p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M8.16671 10.6667L13.2083 14.0277C14.9998 15.222 17.3336 15.222 19.1251 14.0277L24.1667 10.6667M8.16671 28H24.1667C27.1122 28 29.5 25.6122 29.5 22.6667V9.33333C29.5 6.38781 27.1122 4 24.1667 4H8.16671C5.22119 4 2.83337 6.38781 2.83337 9.33333V22.6667C2.83337 25.6122 5.22119 28 8.16671 28Z"
                      stroke="#141718"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-card-title">EMAIL</h3>
                <p className="contact-card-text">hello@3legant.com</p>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116959.07385814075!2d90.4257746!3d23.6412075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2z4LiZ4Liy4Lij4Liy4Lii4Lix4LiT4LiE4Lix4LiN4LiK4LmMIOC4muC4seC4h-C4geC4peC4suC5gOC4l-C4qA!5e0!3m2!1sth!2sth!4v1745647932946!5m2!1sth!2sth"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-contact">
        <div className="container">
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M28 38V14M28 38H32M28 38H18M28 14C28 9.58172 24.4183 6 20 6H12C7.58172 6 4 9.58172 4 14V30C4 33.7304 6.55333 36.8645 10.0077 37.7499M28 14H34.4182C35.4344 14 36.4126 14.3868 37.154 15.0819L42.7358 20.3148C43.5424 21.071 44 22.1273 44 23.2329V34C44 36.2091 42.2091 38 40 38M40 38C40 40.2091 38.2091 42 36 42C33.7909 42 32 40.2091 32 38M40 38C40 35.7909 38.2091 34 36 34C33.7909 34 32 35.7909 32 38M18 38C18 40.2091 16.2091 42 14 42C11.7909 42 10 40.2091 10 38C10 37.916 10.0026 37.8326 10.0077 37.7499M18 38C18 35.7909 16.2091 34 14 34C11.8748 34 10.1368 35.6573 10.0077 37.7499"
                    stroke="#141718"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M20 16H16"
                    stroke="#141718"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 24H12"
                    stroke="#141718"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Free Shipping</h3>
              <p className="feature-text">Order above $200</p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="8"
                    width="40"
                    height="32"
                    rx="4"
                    stroke="#141718"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="4"
                    transform="matrix(1 0 0 -1 20 28)"
                    stroke="#141718"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="matrix(1 0 0 -1 34 26)"
                    fill="#141718"
                  />
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="matrix(1 0 0 -1 10 26)"
                    fill="#141718"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Money-back</h3>
              <p className="feature-text">30 days guarantee</p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28"
                    stroke="#141718"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Secure Payments</h3>
              <p className="feature-text">Secured by Stripe</p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z"
                    stroke="#141718"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-text">Phone and Email support</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
