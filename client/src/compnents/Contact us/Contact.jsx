import React from 'react';

const Contact = () => {
    return (
        <div>
             <div className="contact-container">
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator"> &gt; </span>
        <span className="breadcrumb-current">Contact Us</span>
      </div>

      <div className="hero-section">
        <h1 className="hero-title">We believe in sustainable decor. We're passionate about life at home.</h1>
        <p className="hero-description">
          Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design,
          which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of the present
        </p>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img
            src="/placeholder.svg?height=400&width=500"
            alt="Living room with sustainable furniture"
            className="room-image"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
          <p className="about-text">Our customer service is always prepared to support you 24/7</p>
          <a href="/shop" className="shop-link">
            Shop Now <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-info-container">
          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="address-icon"></i>
            </div>
            <h3 className="contact-info-title">ADDRESS</h3>
            <p className="contact-info-text">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="phone-icon"></i>
            </div>
            <h3 className="contact-info-title">CONTACT US</h3>
            <p className="contact-info-text">+84 234 567 890</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <i className="email-icon"></i>
            </div>
            <h3 className="contact-info-title">EMAIL</h3>
            <p className="contact-info-text">hello@3legant.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">FULL NAME</label>
              <input type="text" className="form-input" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label className="form-label">EMAIL ADDRESS</label>
              <input type="email" className="form-input" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <textarea className="form-textarea" placeholder="Your message"></textarea>
            </div>

            <button className="send-button">Send Message</button>
          </div>

          <div className="contact-map">
            <img src="/placeholder.svg?height=300&width=400" alt="Store location map" className="map-image" />
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="benefit-card">
          <div className="benefit-icon shipping-icon"></div>
          <h3 className="benefit-title">Free Shipping</h3>
          <p className="benefit-text">Order above $200</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon money-back-icon"></div>
          <h3 className="benefit-title">Money-back</h3>
          <p className="benefit-text">30 days guarantee</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon secure-icon"></div>
          <h3 className="benefit-title">Secure Payments</h3>
          <p className="benefit-text">Secured by Stripe</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon support-icon"></div>
          <h3 className="benefit-title">24/7 Support</h3>
          <p className="benefit-text">Phone and Email support</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;