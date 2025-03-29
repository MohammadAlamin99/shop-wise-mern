import React, { useRef } from "react";
import { updateUserProfileRequest } from "../../apiRequest/apiRequiest";

const EditProfile = ({userDetails}) => {
  // user update request
  const fullnameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userProfileUpdate = async ()=>{
    const fullname = fullnameRef.current.value;
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   let data =  await updateUserProfileRequest(fullname, username, email, password);
   console.log(data)
  }
  return (
    <div>
      <div className="main-content-section">
        <form>
          <section className="form-section">
            <h2 className="section-title categroy-text">Account Details</h2>

            <div className="form-group">
              <label htmlFor="firstName">
                NAME 
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Full Name"
                defaultValue={userDetails?.data?.data[0]?.fullName}
                ref={fullnameRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                EMAIL 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                readOnly 
                defaultValue={userDetails?.data?.data[0]?.email}
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                User Name 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                readOnly 
                defaultValue={userDetails?.data?.data[0]?.userName}
                ref={userNameRef}
              />
            </div>
          </section>

          <section className="form-section">
            <h2 className="section-title">Password</h2>

            <div className="form-group">
              <label htmlFor="oldPassword">CHANGE PASSWORD</label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                defaultValue={userDetails?.data?.data[0]?.password}
                ref={passwordRef}
              />
            </div>
          </section>

          <div className="form-actions">
            <button
            onClick={userProfileUpdate} 
            type="button" className="save-button common-Listing-text">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
