import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { SignInRequest } from "../../apiRequest/apiRequiest";
import {jwtDecode} from "jwt-decode"; 


const SignIn = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const toggleShowHandler = () => {
    setShow(!show);
  };

  const emailRef = useRef();
  const passRef = useRef();

  const onSignIn = async () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (!email || !pass) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const result = await SignInRequest(email, pass);
      if (result[0].data.status === "success") {
        toast.success("Sign in successful!");
        localStorage.setItem("userToken", result[0].data.token);
        
        // set userdetails
        const decodedToken = jwtDecode(result[0].data.token);
        const userDetails = {
          id:decodedToken.user_id,
          email: decodedToken.email, 
          name: decodedToken.user_fullName,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Sign in failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="login_section">
        <div className="container-fluid">
          <div className="row custom-row">
            <div className="col-lg-6 custom-col-1">
              <div className="right-side-img">
                <h4 className="logo">3legant.</h4>
                <img
                  src="https://res.cloudinary.com/dankquy0f/image/upload/v1736502598/freepik_br_60a78106-e398-4b7a-8ef9-c48decf049ca_pn3tlf.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 custom-col">
              <div className="signupWrapper signinWrapper">
                <h2 className="pf-sign-up-text">Sign In</h2>
                <p className="common-shop-now-btn">
                  Don’t have an account yet? <a href="/signup">Sign Up</a>
                </p>
                <div className="form">
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email address"
                  />
                  <div className="form-group">
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      ref={passRef}
                    />
                    {show ? (
                      <svg
                        onClick={toggleShowHandler}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                          stroke="#6C7275"
                          stroke-width="1.5"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="#6C7275"
                          stroke-width="1.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={toggleShowHandler}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M9.47004 15.7799C9.28004 15.7799 9.09004 15.7099 8.94004 15.5599C8.12004 14.7399 7.67004 13.6499 7.67004 12.4999C7.67004 10.1099 9.61004 8.16992 12 8.16992C13.15 8.16992 14.24 8.61992 15.06 9.43992C15.2 9.57992 15.28 9.76992 15.28 9.96992C15.28 10.1699 15.2 10.3599 15.06 10.4999L10 15.5599C9.85004 15.7099 9.66004 15.7799 9.47004 15.7799ZM12 9.66992C10.44 9.66992 9.17004 10.9399 9.17004 12.4999C9.17004 12.9999 9.30004 13.4799 9.54004 13.8999L13.4 10.0399C12.98 9.79992 12.5 9.66992 12 9.66992Z"
                          fill="#6C737F"
                        />
                        <path
                          d="M5.59997 19.01C5.42997 19.01 5.24997 18.95 5.10997 18.83C4.03997 17.92 3.07997 16.8 2.25997 15.5C1.19997 13.85 1.19997 11.16 2.25997 9.49998C4.69997 5.67998 8.24997 3.47998 12 3.47998C14.2 3.47998 16.37 4.23998 18.27 5.66998C18.6 5.91998 18.67 6.38998 18.42 6.71998C18.17 7.04998 17.7 7.11998 17.37 6.86998C15.73 5.62998 13.87 4.97998 12 4.97998C8.76997 4.97998 5.67997 6.91998 3.51997 10.31C2.76997 11.48 2.76997 13.52 3.51997 14.69C4.26997 15.86 5.12997 16.87 6.07997 17.69C6.38997 17.96 6.42997 18.43 6.15997 18.75C6.01997 18.92 5.80997 19.01 5.59997 19.01Z"
                          fill="#6C737F"
                        />
                        <path
                          d="M11.9999 21.52C10.6699 21.52 9.36994 21.25 8.11994 20.72C7.73994 20.56 7.55994 20.12 7.71994 19.74C7.87994 19.36 8.31994 19.18 8.69994 19.34C9.75994 19.79 10.8699 20.02 11.9899 20.02C15.2199 20.02 18.3099 18.08 20.4699 14.69C21.2199 13.52 21.2199 11.48 20.4699 10.31C20.1599 9.82 19.8199 9.35 19.4599 8.91C19.1999 8.59 19.2499 8.12 19.5699 7.85C19.8899 7.59 20.3599 7.63 20.6299 7.96C21.0199 8.44 21.3999 8.96 21.7399 9.5C22.7999 11.15 22.7999 13.84 21.7399 15.5C19.2999 19.32 15.7499 21.52 11.9999 21.52Z"
                          fill="#6C737F"
                        />
                        <path
                          d="M12.69 16.7701C12.34 16.7701 12.02 16.5201 11.95 16.1601C11.87 15.7501 12.14 15.3601 12.55 15.2901C13.65 15.0901 14.57 14.1701 14.77 13.0701C14.85 12.6601 15.24 12.4001 15.65 12.4701C16.06 12.5501 16.33 12.9401 16.25 13.3501C15.93 15.0801 14.55 16.4501 12.83 16.7701C12.78 16.7601 12.74 16.7701 12.69 16.7701Z"
                          fill="#6C737F"
                        />
                        <path
                          d="M1.99994 23.25C1.80994 23.25 1.61994 23.18 1.46994 23.03C1.17994 22.74 1.17994 22.26 1.46994 21.97L8.93994 14.5C9.22994 14.21 9.70994 14.21 9.99994 14.5C10.2899 14.79 10.2899 15.27 9.99994 15.56L2.52994 23.03C2.37994 23.18 2.18994 23.25 1.99994 23.25Z"
                          fill="#6C737F"
                        />
                        <path
                          d="M14.53 10.7199C14.34 10.7199 14.15 10.6499 14 10.4999C13.71 10.2099 13.71 9.72994 14 9.43994L21.47 1.96994C21.76 1.67994 22.24 1.67994 22.53 1.96994C22.82 2.25994 22.82 2.73994 22.53 3.02994L15.06 10.4999C14.91 10.6499 14.72 10.7199 14.53 10.7199Z"
                          fill="#6C737F"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="terms_condition_cheaker">
                    <input type="checkbox" />
                    <p className="common-shop-now-btn">
                      Remember me
                      <a href="#">Forgot password</a>
                    </p>
                  </div>
                  <button onClick={onSignIn} className="sign-up-button">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
