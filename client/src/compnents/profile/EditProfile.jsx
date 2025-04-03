import React, { useRef } from "react";
import { updateUserProfileRequest } from "../../apiRequest/apiRequiest";
import toast, { Toaster } from "react-hot-toast";
const EditProfile = ({ userDetails, profileImage }) => {
  
  // user update request
  const fullnameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef(); 
  const NewPasswordRef = useRef(); 

  const convertBlobToFile = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new File([blob], "profile-image.jpg", { type: blob.type });
  };

  const userProfileUpdate = async () => {
    const fullname = fullnameRef.current.value;
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const oldPassword = oldPasswordRef.current.value;
    const newPassword = NewPasswordRef.current.value;
    let imageToUpload = profileImage;
    if (profileImage?.startsWith("blob:")) {
      imageToUpload = await convertBlobToFile(profileImage);
    }
    let data = await updateUserProfileRequest(
      imageToUpload, 
      fullname,
      username,
      email,
      oldPassword,
      newPassword
    );
    console.log(data)
    if(data.data.status==="success"){
      toast.success("Profile Updated!");
      window.location.reload("/account")
    }
    else if (data?.data?.status === "fail") {
      toast.error("Old password is incorrect. Please try again.");
    }
  };

  
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <div className="main-content-section">
        <form> 
          <section className="form-section">
            <h2 className="section-title categroy-text">Account Details</h2>
            <div className="form-group">
              <label htmlFor="firstName">NAME</label>
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
              <label htmlFor="email">EMAIL</label>
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
              <label htmlFor="email">User Name</label>
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
              <label htmlFor="oldPassword">OLD PASSWORD</label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                placeholder="Old Password"
                ref={oldPasswordRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">NEW PASSWORD</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="New Password"
                ref={NewPasswordRef}
              />
            </div>
          </section>

          <div className="form-actions">
            <button
              onClick={userProfileUpdate}
              type="submit"
              className="save-button common-Listing-text"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;



