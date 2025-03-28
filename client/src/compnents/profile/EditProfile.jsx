import React from 'react';

const EditProfile = () => {
    return (
        <div>
          <div className="main-content-section">
            <form>
              <section className="form-section">
                <h2 className="section-title categroy-text">Account Details</h2>

                <div className="form-group">
                  <label htmlFor="firstName">
                     NAME <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </section>

              <section className="form-section">
                <h2 className="section-title">Password</h2>

                <div className="form-group">
                  <label htmlFor="oldPassword">OLD PASSWORD</label>
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Old password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword">NEW PASSWORD</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="New password"
                  />
                </div>
              </section>

              <div className="form-actions">
                <button type="submit" className="save-button common-Listing-text">
                  Save changes
                </button>
              </div>
            </form>
          </div> 
        </div>
    );
};

export default EditProfile;