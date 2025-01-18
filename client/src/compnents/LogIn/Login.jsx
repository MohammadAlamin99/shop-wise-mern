import React from "react";
const Login = () => {
  return (
    <div>
      <div className="login_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="right-side-img">
                <img
                  src="https://res.cloudinary.com/dankquy0f/image/upload/v1736502598/freepik_br_60a78106-e398-4b7a-8ef9-c48decf049ca_pn3tlf.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signupWrapper">
                <h2>Sign up</h2>
                <p>
                  Already have an account? <a href="#">Sign in</a>
                </p>
                <div className="form">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email address" />
                  <input type="password" placeholder="Password" />
                  <div className="terms_condition_cheaker">
                    <input type="checkbox" />
                    <p>I agree with Privacy Policy and Terms of Use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
