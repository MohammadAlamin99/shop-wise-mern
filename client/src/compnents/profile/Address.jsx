import { useSelector } from "react-redux";
import EditAddress from "./EditAddress";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const getUserDetails = useSelector((state) => state.getUserDetails.user);

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
    // Reset the dropdown to the default value after selection
    e.target.value = "/account";
  };
  return (
    <>
      <div className="account-section">
        <div className="container">
          <h1 className="main-title common_main_head">My Address</h1>
          <div className="account-content">
            <div className="sidebar">
              <div className="profile-section">
                <div className="profile-image-container">
                  <img
                    src={getUserDetails?.data?.data[0]?.image}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <h2 className="profile-name categroy-text">
                  {getUserDetails?.data?.data[0]?.fullName}
                </h2>
              </div>
              <div class="custom-dropdown">
                <select
                  onChange={onMobileLocationHandler}
                  defaultValue="/address"
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
                  <li className="common-Listing-text">
                    <a href="/account">Account</a>
                  </li>
                  <li className="active common-Listing-text">
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
            <EditAddress />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
