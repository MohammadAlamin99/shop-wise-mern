import EditWishlist from "./EditWishlist";
import { useSelector } from "react-redux";
const Wishlist = () => {
  const getUserDetails = useSelector((state) => state.getUserDetails.user);

  return (
    <div>
      <div className="account-section">
        <div className="container">
          <h1 className="main-title common_main_head">My Wishlist</h1>

          <div className="account-content">
            <div className="sidebar">
              <div className="profile-section">
                <div className="profile-image-container">
                  <img
                    src={getUserDetails?.data?.data[0]?.image}
                    alt="Profile"
                    className="profile-image"
                  />
                  <input type="file" accept="image/*" className="file-input" />
                </div>
                <h2 className="profile-name categroy-text">
                  {getUserDetails?.data?.data[0]?.fullName}
                </h2>
              </div>
              <nav className="sidebar-nav">
                <ul>
                  <li className="common-Listing-text">
                    <a href="/account">Account</a>
                  </li>
                  <li className="common-Listing-text">
                    <a href="/address">Address</a>
                  </li>
                  <li className="common-Listing-text">
                    <a href="/order">Orders</a>
                  </li>
                  <li className="active common-Listing-text">
                    <a href="/wishlist">Wishlist</a>
                  </li>
                  <li className="common-Listing-text"
                   onClick={() => {
                    localStorage.clear();
                    window.location.href = "/signin"; 
                  }}
                  >Log Out</li>
                </ul>
              </nav>
            </div>
            <EditWishlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
