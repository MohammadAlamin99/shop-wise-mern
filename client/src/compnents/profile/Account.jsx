import React, { useRef, useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import { userGetRequest } from "../../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/state-slice/user-slice";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const getUserDetails = useSelector((state) => state?.getUserDetails?.user);
  const dispatch = useDispatch();


  useEffect(() => {
    (async () => {
      const userData = await userGetRequest();
      dispatch(setUser(userData));
    })();
  }, [0]);

  if(getUserDetails?.data?.status==="unathurized"){
    localStorage.clear();
    window.location.href="/signin";
  }

  const [profileImage, setProfileImage] = useState(
    getUserDetails?.data?.data[0]?.image
  );

  const fileInputRef = useRef(null);
  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // navgate phone device
  const navigate = useNavigate();
  const onMobileLocationHandler = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "/logout") {
      localStorage.clear();
      navigate("/signin");
    } else {
      navigate(selectedValue);
    }
    e.target.value = "/account";
  };

  return (
    <>
      <div className="account-section">
        <div className="container">
          <h1 className="main-title common_main_head">My Account</h1>

          <div className="account-content">
            <div className="sidebar">
              <div className="profile-section">
                <div
                  className="profile-image-container"
                  onClick={handleProfileClick}
                >
                  <img
                    src={profileImage || getUserDetails?.data?.data[0]?.image}
                    alt="Profile"
                    className="profile-image"
                  />
                  <div className="camera-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M4.2508 4.22265C4.09763 4.45241 4.15972 4.76285 4.38948 4.91603C4.61924 5.0692 4.92968 5.00711 5.08285 4.77735L4.2508 4.22265ZM5.60434 3.09373L6.02037 3.37108V3.37108L5.60434 3.09373ZM10.396 3.09373L10.812 2.81638L10.396 3.09373ZM10.9175 4.77735C11.0706 5.00711 11.3811 5.0692 11.6108 4.91603C11.8406 4.76285 11.9027 4.45241 11.7495 4.22265L10.9175 4.77735ZM9.50016 9.5C9.50016 10.3284 8.82859 11 8.00016 11V12C9.38087 12 10.5002 10.8807 10.5002 9.5H9.50016ZM8.00016 11C7.17174 11 6.50016 10.3284 6.50016 9.5H5.50016C5.50016 10.8807 6.61945 12 8.00016 12V11ZM6.50016 9.5C6.50016 8.67157 7.17174 8 8.00016 8V7C6.61945 7 5.50016 8.11929 5.50016 9.5H6.50016ZM8.00016 8C8.82859 8 9.50016 8.67157 9.50016 9.5H10.5002C10.5002 8.11929 9.38087 7 8.00016 7V8ZM5.08285 4.77735L6.02037 3.37108L5.18832 2.81638L4.2508 4.22265L5.08285 4.77735ZM6.71374 3H9.28658V2H6.71374V3ZM9.97996 3.37108L10.9175 4.77735L11.7495 4.22265L10.812 2.81638L9.97996 3.37108ZM9.28658 3C9.56521 3 9.82541 3.13925 9.97996 3.37108L10.812 2.81638C10.472 2.30635 9.89957 2 9.28658 2V3ZM6.02037 3.37108C6.17492 3.13925 6.43511 3 6.71374 3V2C6.10076 2 5.52834 2.30635 5.18832 2.81638L6.02037 3.37108ZM4.00016 5H12.0002V4H4.00016V5ZM14.1668 7.16667V11.8333H15.1668V7.16667H14.1668ZM12.0002 14H4.00016V15H12.0002V14ZM1.8335 11.8333V7.16667H0.833496V11.8333H1.8335ZM4.00016 14C2.80355 14 1.8335 13.03 1.8335 11.8333H0.833496C0.833496 13.5822 2.25126 15 4.00016 15V14ZM14.1668 11.8333C14.1668 13.03 13.1968 14 12.0002 14V15C13.7491 15 15.1668 13.5822 15.1668 11.8333H14.1668ZM12.0002 5C13.1968 5 14.1668 5.97005 14.1668 7.16667H15.1668C15.1668 5.41777 13.7491 4 12.0002 4V5ZM4.00016 4C2.25126 4 0.833496 5.41777 0.833496 7.16667H1.8335C1.8335 5.97005 2.80355 5 4.00016 5V4Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="file-input"
                  />
                </div>
                <h2 className="profile-name categroy-text">
                  {getUserDetails?.data?.data[0]?.fullName}
                </h2>
              </div>
              <div class="custom-dropdown">
                <select
                  onChange={onMobileLocationHandler}
                  defaultValue="/account"
                >
                  <option value="/account" selected>
                    Account
                  </option>
                  <option value="/address">Address</option>
                  <option value="/order">Orders</option>
                  <option value="/wishlist">Wishlist</option>
                  <option value="/logout">Log Out</option>
                </select>
                <div class="custom-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.7071 9.79289C16.3166 9.40237 15.6834 9.40237 15.2929 9.79289L12.5 12.5858L9.70711 9.79289C9.31658 9.40237 8.68342 9.40237 8.29289 9.79289C7.90237 10.1834 7.90237 10.8166 8.29289 11.2071L11.7929 14.7071C12.1834 15.0976 12.8166 15.0976 13.2071 14.7071L16.7071 11.2071C17.0976 10.8166 17.0976 10.1834 16.7071 9.79289Z"
                      fill="#6C7275"
                    />
                  </svg>
                </div>
              </div>
              <nav className="sidebar-nav">
                <ul>
                  <li className="active common-Listing-text">
                    <a href="/account">Account</a>
                  </li>
                  <li className="common-Listing-text">
                    <a href="/address">Address</a>
                  </li>
                  <li className="common-Listing-text">
                    <a href="/order">Orders</a>
                  </li>
                  <li className="common-Listing-text">
                    <a href="/wishlist">Wishlist</a>
                  </li>
                  <li
                    className="common-Listing-text"
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/signin";
                    }}
                  >
                    Log Out
                  </li>
                </ul>
              </nav>
            </div>
            <EditProfile
              userDetails={getUserDetails}
              profileImage={profileImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
